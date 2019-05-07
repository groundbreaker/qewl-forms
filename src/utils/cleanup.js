import _ from "underscore";

/**
 * MUTATES an object to delete any key with a value that is an empty object.
 *
 * For example:
 * ```js
 * { name: "bob", address: {} }
 * ```
 * becomes:
 * ```js
 * { name: "bob" }
 * ```
 *
 * @param {Object} obj
 */
export const deleteEmptyKeys = obj => {
  for (let key in obj) {
    if (!obj[key] || typeof obj[key] !== "object") {
      continue;
    }
    deleteEmptyKeys(obj[key]);
    if (Object.keys(obj[key]).length === 0) {
      delete obj[key];
    }
  }
};

/**
 * @Deprecated
 * A function that mutates a copy of `formData` to remove all keys
 * with null values.
 *
 * @param {object} formData
 */
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
