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
  string: "string",
  id: "string"
};

const fieldTypes = ({ apiSchema, inputField, field, rjsf }) => {
  const { enums, inputTypes } = apiSchema;

  const getEnums = _.memoize(() =>
    _.pluck(
      mb(["enumValues"])(_.findWhere(enums, { name: field.name })),
      "name"
    )
  );

  const rjsfScalarOptions = {
    ENUM: {
      type: "string",
      enum: getEnums(),
      enumNames: getEnums().map(value => humanTitles(value))
    },
    INPUT_OBJECT:
      mb(["name"])(_.findWhere(inputTypes, { name: field.name })) &&
      processInput({
        apiSchema,
        input: mb(["name"])(_.findWhere(inputTypes, { name: field.name })),
        rjsf
      }),
    LIST: {
      type: "array",
      items:
        mb(["ofType"])(field) &&
        fieldTypes({
          apiSchema,
          field: mb(["ofType"])(field),
          inputField,
          rjsf
        })
    },
    SCALAR: { type: scalars[field.name && field.name.toLowerCase()] }
  };

  const scalarOptions = {
    ENUM: {
      type: ["string", "null"],
      enum: getEnums(),
      enumNames: getEnums().map(value => humanTitles(value))
    },
    INPUT_OBJECT:
      mb(["name"])(_.findWhere(inputTypes, { name: field.name })) &&
      processInput({
        apiSchema,
        input: mb(["name"])(_.findWhere(inputTypes, { name: field.name }))
      }),
    LIST: {
      type: ["array", "null"],
      items:
        mb(["ofType"])(field) &&
        fieldTypes({ apiSchema, field: mb(["ofType"])(field), inputField })
    },
    SCALAR: {
      type: [scalars[field.name && field.name.toLowerCase()], "null"]
    }
  };

  return {
    ...(rjsf ? rjsfScalarOptions[field.kind] : scalarOptions[field.kind]),
    ...{ title: humanTitles(inputField.name) }
  };
};

const processInput = ({ apiSchema, input, rjsf }) => {
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
      field,
      rjsf
    });
  });

  return schema;
};

export const withForm = ({
  input,
  formName,
  dataKey,
  rjsf = false,
  mergeKey = [],
  defaultValues = {}
}) => {
  const formData = formName ? `${formName}FormData` : `formData`;
  const formErrors = formName ? `${formName}FormErrors` : `formErrors`;
  const formUpdate = formName ? `${formName}FormUpdate` : `formUpdate`;
  const schema = formName ? `${formName}Schema` : `schema`;

  return compose(
    setDisplayName(`withFormQewl(${formName})`),
    withStateHandlers(
      ({ apiSchema, ...props }) => ({
        [schema]: processInput({ apiSchema, input, rjsf }),
        [formData]: omit(
          { ...mb(mergeKey)(props[dataKey]), ...defaultValues },
          ["__typename"]
        ),
        [formErrors]: {
          errors: null,
          dataValid: false
        }
      }),
      {
        [formUpdate]: state => value => ({
          ...state,
          [formData]: merge(state[formData], value)
        }),
        setErrors: state => value => ({ ...state, [formErrors]: value })
      }
    ),
    withPropsOnChange([formData], ({ setErrors, ...props }) =>
      _.debounce(setErrors(validator(props[formData], props[schema])), 2000)
    )
  );
};

export default withForm;

const validator = (formData, JSONSchema) => {
  const result = validate(formData, JSONSchema);
  let errors = {};

  result.errors.map(({ argument, property, message, ...rest }) => {
    if (property !== "instance") {
      let propertyCopy = property.split(".").slice();
      propertyCopy.shift();
      propertyCopy.reduce((o, s, i) => {
        if (i + 1 === propertyCopy.length) {
          return (o[s] = { message });
        }
        return (o[s] = {});
      }, errors);
    }

    if (property === "instance") {
      errors[argument] = { message };
    }
  });

  return {
    errors,
    dataValid: result.valid
  };
};

export const removeNullKeys = formData => {
  let formDataCopy = JSON.parse(JSON.stringify(formData));

  Object.keys(formDataCopy).forEach(key => {
    if (formDataCopy[key] && typeof formDataCopy[key] === "object") {
      formDataCopy[key] = removeNullKeys(formDataCopy[key]);
      if (_.isEmpty(formDataCopy[key])) delete formDataCopy[key];
    } else if (formDataCopy[key] === undefined || formDataCopy[key] === null)
      delete formDataCopy[key];
    else formDataCopy[key] = formDataCopy[key];
  });

  return formDataCopy;
};
