import { ABARoutingNumberIsValid as isRouting } from "bank-routing-number-validator";
import isUuid from "is-uuid";
import isUrl from "is-url";
import isIP from "isipaddress";
import { parsePhoneNumber, ParseError } from "libphonenumber-js";
import { superstruct } from "superstruct";

import isAccount from "../utils/validate-bank-account";
import isEmail from "../utils/validate-rfc822-email";

/**
 * Cached compiled regexes for performance.
 */
const validAWSDate = /^(\d{4}(?:(?:(?:-)?(?:00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6]))?|(?:(?:-)?(?:1[0-2]|0[1-9]))?|(?:(?:-)?(?:1[0-2]|0[1-9])(?:-)?(?:0[1-9]|[12][0-9]|3[01]))?|(?:(?:-)?W(?:0[1-9]|[1-4][0-9]5[0-3]))?|(?:(?:-)?W(?:0[1-9]|[1-4][0-9]5[0-3])(?:-)?[1-7])?)?)(Z|[+-]\d{2}:\d{2})?$/;
const validAWSDateTime = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
const validAWSTime = /^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])(\.[0-9]{0,9})?(Z|[+-]\d{2}:\d{2})?$/;
const validEIN = /^[\d]{2}-[\d]{7}$/;
const validSSN = /^[\d]{3}-[\d]{2}-[\d]{4}$/;

/**
 *  Helpers
 */
const handleRequired = val =>
  (val === undefined || val === "") && "missing_required";

/**
 *  Type validator functions.
 *  Named after types, should be Capitalized.
 */
const Account = value =>
  handleRequired(value) || isAccount(value) || "invalid_account_number";
const AWSDate = value =>
  handleRequired(value) || validAWSDate.test(value) || "invalid_date";
const AWSDateTime = value =>
  handleRequired(value) || validAWSDateTime.test(value) || "invalid_datetime";
const AWSEmail = value =>
  handleRequired(value) || isEmail(value) || "invalid_email";
const AWSIPAddress = value =>
  handleRequired(value) || isIP.test(value) || "invalid_ip";
const AWSJSON = value => {
  if (value === undefined || value === "") return "missing_required";
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return handleRequired(value) || "invalid_JSON";
  }
};
const AWSPhone = value => {
  if (value === undefined || value === "") return "missing_required";
  try {
    const number = parsePhoneNumber(value);
    return number.isValid() || "invalid_phone";
  } catch (err) {
    if (err instanceof ParseError) return `phone_${err.message.toLowerCase()}`;
    return handleRequired(value) || false;
  }
};
const AWSTime = value =>
  handleRequired(value) || validAWSTime.test(value) || "invalid_time";
const AWSTimestamp = value =>
  handleRequired(value) || Number.isInteger(value) || "invalid_timestamp";
const AWSUrl = value => handleRequired(value) || isUrl(value) || "invalid_time";
const Boolean = value =>
  handleRequired(value) || typeof value === "boolean" || "invalid_boolean";
const EIN = value =>
  handleRequired(value) || validEIN.test(value) || "invalid_EIN";
const ID = value => handleRequired(value) || isUuid.v4(value) || "invalid_UUID";
const Int = value =>
  handleRequired(value) || Number.isInteger(value) || "invalid_integer";
const Routing = value =>
  handleRequired(value) || isRouting(value) || "invalid_routing_number";
const SSN = value =>
  handleRequired(value) || validSSN.test(value) || "invalid_SSN";
const String = value =>
  handleRequired(value) || typeof value === "string" || "invalid_string";
const Float = value =>
  handleRequired(value) || typeof value === "number" || "invalid_float";

const types = {
  Account,
  AWSEmail,
  AWSDate,
  AWSDateTime,
  AWSIPAddress,
  AWSJSON,
  AWSPhone,
  AWSTime,
  AWSTimestamp,
  AWSUrl,
  Boolean,
  EIN,
  Float,
  ID,
  Int,
  Routing,
  String,
  SSN
};

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

  // Custom Validators
  switch (field.name) {
    case "taxId": {
      const map = { SSN: "SSN", ITIN: "SSN", EIN: "EIN" };
      return struct.dynamic((value, parent) => {
        const type = map[parent.taxIdType] || struct("string");
        return required ? type : Option(type);
      });
    }
    case "accountNumber":
      return required ? "Account" : Option("Account");
    case "routingNumber":
      return required ? "Routing" : Option("Routing");
    // Intentionally no default, fallthrough to generic validation.
  }

  // Fallback to validation based on graphql types.
  switch (match.kind) {
    case "NON_NULL":
      return typeMatcher({ apiSchema, field: match, required: true });

    case "SCALAR":
      return required ? match.name : Option(match.name);

    case "INPUT_OBJECT": {
      const subField = setupValidator({ apiSchema, inputType: match.name });
      return required ? subField : Option(subField);
    }

    case "LIST": {
      const lst = struct.list([typeMatcher({ apiSchema, field: match })]);
      return required ? lst : Option(lst);
    }

    case "ENUM": {
      const enums = apiSchema.enums[match.name].enumValues;
      const enumValidator = struct.enum([...enums.map(({ name }) => name)]);
      return required ? enumValidator : Option(enumValidator);
    }

    default:
      throw new Error(`Could not parse type \`${match.kind}\` in validator.`);
  }
};

/**
 * Lookup `inputType` in `apiSchema.inputTypes` and dynamically construct
 * superstruct validator from inputType fields defined in the `apiSchema`.
 */
export const createValidator = args => struct(setupValidator(args));

const setupValidator = ({ apiSchema, inputType }) => {
  const fields = apiSchema.inputTypes[inputType].inputFields;

  if (!fields) throw new Error(`InvalidInputType: ${inputType}`);

  const validationConfig = fields.reduce((config, field) => {
    config[field.name] = typeMatcher({ apiSchema, field });
    return config;
  }, {});

  return validationConfig;
};
