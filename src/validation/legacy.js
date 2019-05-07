import { validate } from "jsonschema";
import { deleteEmptyKeys } from "../utils/cleanup";

/**
 * Legacy validator function.  Works??
 *
 * @param {Object} formData
 * @param {Object} JSONSchema
 */
export const validator = (formData, JSONSchema) => {
  const result = validate(deleteEmptyKeys(formData), JSONSchema);
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
