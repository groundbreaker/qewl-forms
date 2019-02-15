import {
  compose,
  setDisplayName,
  withProps,
  withStateHandlers
} from "recompose";
import _ from "underscore";
import { mb } from "../utils/vendor/mb.js";
import { humanTitles } from "../utils/string";
import * as deepmerge from "deepmerge";

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

    return "";
  }

  return _.mapObject(value.properties, (v, k) => generateField(v, k));
};

<<<<<<< HEAD
export const withForm = ({ input, formName, mergeKey }) =>
  compose(
    withProps(({ apiSchema }) => ({
      [`${formName}JSONSchema`]: processInput({ apiSchema, input })
    })),
    withProps(props => ({
      [`${formName}FormSchema`]: _.mapObject(
        props[`${formName}JSONSchema`].properties,
        (v, k) => generateField(v, k)
      )
    })),
    withStateHandlers(
      props => ({
        [`${formName}FormData`]: {
          ...props[`${formName}FormSchema`],
          ...props[mergeKey]
        }
      }),
=======
export const withForm = ({ input, formName }) => {
  return compose(
    setDisplayName(`withFormQewl(${formName})`),
    withStateHandlers(
      props => {
        const processedSchema = processInput({ apiSchema, input });
        const processedFormSchema = _.mapObject(
          processedSchema.properties,
          (v, k) => generateField(v, k)
        );
        return {
          [`${formName}Schema`]: processedSchema,
          [`${formName}FormSchema`]: processedFormSchema,
          [`${formName}FormData`]: processedFormSchema
        };
      },
>>>>>>> 8cf76f6a81510269366982aed15dc8368c6ddfac
      {
        [`${formName}FormUpdate`]: state => value => ({
          ...state,
          [`${formName}FormData`]: deepmerge(
            state[`${formName}FormData`],
            value
          )
        })
      }
    )
  );
};

export default withForm;
