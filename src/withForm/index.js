import {
  compose,
  setDisplayName,
  withStateHandlers,
  withPropsOnChange
} from "recompose";
import _ from "underscore";
import omit from "omit-deep";
import { validate } from "jsonschema";

import { mb } from "../utils/vendor/mb.js";
import { humanTitles } from "../utils/string";
import merge from "../utils/merge";

const scalars = {
  awsemail: "string",
  awsdate: "string",
  awsdatetime: "string",
  awsjson: "string",
  awsipaddress: "string",
  awsurl: "string",
  awsphone: "string",
  string: "string"
};

const fieldTypes = ({ apiSchema, inputField, field }) => {
  const { enums, inputTypes } = apiSchema;

  const scalarOptions = {
    ENUM: {
      type: "string",
      enums: _.pluck(
        mb(["enumValues"])(_.findWhere(enums, { name: field.name })),
        "name"
      )
    },
    INPUT_OBJECT:
      mb(["name"])(_.findWhere(inputTypes, { name: field.name })) &&
      processInput({
        apiSchema,
        input: mb(["name"])(_.findWhere(inputTypes, { name: field.name }))
      }),
    LIST: {
      type: "array",
      items:
        mb(["ofType"])(field) &&
        fieldTypes({ apiSchema, field: mb(["ofType"])(field), inputField })
    },
    SCALAR: {
      type: scalars[field.name && field.name.toLowerCase()]
    }
  };

  return {
    ...scalarOptions[field.kind],
    ...{ title: humanTitles(inputField.name) }
  };
};

const processInput = ({ apiSchema, input }) => {
  const { inputTypes } = apiSchema;
  const schema = { properties: {}, required: [], type: "object" };
  const inputType = _.findWhere(inputTypes, { name: input });

  inputType.inputFields.map(inputField => {
    let field = mb(["type"])(inputField);

    if (inputField.type.kind === "NON_NULL") {
      schema.required.push(inputField.name);
      field = mb(["type", "ofType"])(inputField);
    }

    schema.properties[inputField.name] = fieldTypes({
      apiSchema,
      inputField,
      field
    });
  });

  return schema;
};

const generateField = (value, key) => {
  if (!value.properties) {
    if (value.items) {
      return [];
    }

    return null;
  }

  return _.mapObject(value.properties, (v, k) => generateField(v, k));
};

export const withForm = ({ input, formName, mergeKey }) => {
  return compose(
    setDisplayName(`withFormQewl(${formName})`),
    withStateHandlers(
      ({ apiSchema, ...props }) => {
        const processedSchema = processInput({ apiSchema, input });
        const processedFormSchema = _.mapObject(
          processedSchema.properties,
          (v, k) => generateField(v, k)
        );

        return {
          [`${formName}JSONSchema`]: processedSchema,
          [`${formName}FormSchema`]: processedFormSchema,
          [`${formName}FormData`]: omit(
            {
              ...processedFormSchema,
              ...props[mergeKey]
            },
            ["__typename"]
          ),
          [`${formName}FormErrors`]: {
            errors: null,
            disabled: true
          }
        };
      },
      {
        [`${formName}FormUpdate`]: state => value => ({
          ...state,
          [`${formName}FormData`]: merge(state[`${formName}FormData`], value)
        }),
        setErrors: () => value => ({ [`${formName}FormErrors`]: value })
      }
    ),
    withPropsOnChange([`${formName}FormData`], props =>
      props.setErrors(
        validator(props[`${formName}FormData`], props[`${formName}JSONSchema`])
      )
    )
  );
};

export default withForm;

const validator = (formData, JSONSchema) => {
  const result = validate(removeEmpty(formData), JSONSchema);
  const errors = {};

  result.errors.map(({ property, message }) => {
    let propertyCopy = property.split(".").slice();
    propertyCopy.shift();
    propertyCopy.reduce((o, s, i) => {
      if (i + 1 === propertyCopy.length) {
        return (o[s] = { message });
      }
      return (o[s] = {});
    }, errors);
  });

  return {
    errors,
    disabled: !result.valid
  };
};

const removeEmpty = obj => {
  Object.entries(obj).forEach(
    ([key, val]) =>
      (val && typeof val === "object" && removeEmpty(val)) ||
      (val === "" && (obj[key] = null))
  );
  return obj;
};
