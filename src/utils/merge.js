import * as deepmerge from "deepmerge";

const defaultOptions = {
  arrayMerge: (destinationArray, sourceArray) => sourceArray
};

export default (x, y, options) =>
  deepmerge(x, y, { ...options, ...defaultOptions });
