import { superstruct } from "superstruct";
import isUuid from "is-uuid";
import isEmail from "../utils/validate-rfc822-email";
import { parsePhoneNumber, ParseError } from "libphonenumber-js";

/**
 * Cached compiled regexes for performance.
 */
const validISO8601 = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?(Z|[+-](?:2[0-3]|[01][0-9])(?::?(?:[0-5][0-9]))?)?$/;
const validSSN = /^[\d]{3}-[\d]{2}-[\d]{4}$/;
const validEIN = /^[\d]{2}-[\d]{7}$/;

/**
 *  Type validator functions.
 *  Named after types, should be Capitalized.
 */
const AWSDate = value => validISO8601.test(value) || "invalid_date";
const AWSEmail = value => isEmail(value) || "invalid_email";
const AWSPhone = value => {
  try {
    const number = parsePhoneNumber(value);
    return number.isValid();
  } catch (err) {
    if (err instanceof ParseError) return "phone_" + err.message.toLowerCase();
  }
};
const EIN = value => validEIN.test(value) || "invalid_EIN";
const ID = value => isUuid.v4(value) || "invalid_UUID";
const SSN = value => validSSN.test(value) || "invalid_SSN";
const String = value => {
  const valueType = typeof value;
  return valueType === "string" || `unexpected_${valueType}`;
};

const types = { ID, AWSEmail, String, AWSDate, AWSPhone, SSN, EIN };

/**
 * Higher kinded types / Generics (not really)
 * Functions that take a type (struct) and return a different type (struct)
 */
const Option = gqlNullable => struct.union([gqlNullable, "undefined", "null"]);

/**
 * Build custom struct.
 */
const struct = superstruct({ types });

/**
 *  Build out a struct based on GQL Types passed in as processed apiSchema.
 *  TODO: Build directly off the instrospection.
 *
 *  @returns {string|struct}
 */
const typeMatcher = ({ apiSchema, field, required = false }) => {
  const match = field.type || field.ofType;

  switch (match.kind) {
    case "NON_NULL":
      return typeMatcher({ apiSchema, field: match, required: true });

    case "SCALAR":
      return required ? match.name : Option(match.name);

    case "INPUT_OBJECT": {
      const subField = createValidator({ apiSchema, inputType: match.name });
      return required ? subField : Option(subField);
    }

    case "LIST": {
      const lst = struct.list([typeMatcher({ apiSchema, field: match })]);
      return required ? lst : Option(lst);
    }

    case "ENUM": {
      const enums = apiSchema.enums[match.name].enumValues;
      return struct.enum([...enums.map(({ name }) => name)]);
    }

    default:
      throw new Error(`Could not parse type \`${match.kind}\` in validator.`);
  }
};

/**
 * Lookup `inputType` in `apiSchema.inputTypes` and dynamically construct
 * superstruct validator from inputType fields defined in the `apiSchema`.
 */
export const createValidator = ({ apiSchema, inputType }) => {
  const fields = apiSchema.inputTypes[inputType].inputFields;

  if (!fields) throw new Error(`InvalidInputType: ${inputType}`);

  const validationConfig = fields.reduce(
    (config, field) => ({
      ...config,
      [field.name]: typeMatcher({ apiSchema, field })
    }),
    {}
  );

  return struct(validationConfig);
};
