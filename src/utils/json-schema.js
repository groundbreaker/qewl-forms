import { humanTitles } from "../utils/string";
import { mb } from "../utils/vendor/mb.js";

const scalars = {
  awsemail: "string",
  awsdate: "string",
  awsdatetime: "string",
  awsjson: "string",
  awsipaddress: "string",
  awsurl: "string",
  awsphone: "string",
  string: "string",
  id: "string"
};

const fieldTypes = ({ apiSchema, inputField, field, required }) => {
  const { enums, inputTypes } = apiSchema;

  const maybeHasEnumValues = mb(["enumValues"])(
    enums.find(anEnum => anEnum.name === field.name)
  );

  const enumValues = maybeHasEnumValues
    ? maybeHasEnumValues.map(anEnum => anEnum.name)
    : [];

  const maybeObject = mb(["name"])(
    inputTypes.find(inputType => inputType.name === field.name)
  );

  const scalarOptions = {
    ENUM: {
      type: ["string", ...(required ? [] : ["null"])],
      enum: enumValues,
      enumNames: enumValues.map(value => humanTitles(value))
    },
    INPUT_OBJECT:
      maybeObject && processInput({ apiSchema, input: maybeObject }),
    LIST: {
      type: ["array", ...(required ? [] : ["null"])],
      items:
        mb(["ofType"])(field) &&
        fieldTypes({ apiSchema, field: mb(["ofType"])(field), inputField })
    },
    SCALAR: {
      type: [
        scalars[field.name && field.name.toLowerCase()],
        ...(required ? [] : ["null"])
      ]
    }
  };

  return {
    ...scalarOptions[field.kind],
    ...{ title: humanTitles(inputField.name) }
  };
};

export const processInput = ({ apiSchema, input }) => {
  const { inputTypes } = apiSchema;
  const schema = { properties: {}, required: [], type: "object" };
  const inputType = inputTypes.find(aType => aType.name === input);

  inputType.inputFields.map(inputField => {
    let field = mb(["type"])(inputField);

    let required = false;

    if (inputField.type.kind === "NON_NULL") {
      required = true;
      schema.required.push(inputField.name);
      field = mb(["type", "ofType"])(inputField);
    }

    schema.properties[inputField.name] = fieldTypes({
      apiSchema,
      inputField,
      field,
      required
    });
  });

  return schema;
};
