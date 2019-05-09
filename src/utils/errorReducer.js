import objectPath from "object-path";

export const errorReducer = (finalErrorObject, currentError) => {
  objectPath.set(finalErrorObject, currentError.path, {
    message: currentError.reason || "There is an error with this field"
  });

  return finalErrorObject;
};
