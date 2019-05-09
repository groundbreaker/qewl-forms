import objectPath from "object-path";

export const errorReducer = (finalErrorObject, currentError) => {
  objectPath.set(
    finalErrorObject,
    currentError.path,
    currentError.reason || "default"
  );

  return finalErrorObject;
};
