/**
 *  Convert `[obj.key = 1, obj.key = 2, obj.key =3]` to
 *  `{ 1: obj, 2: obj, 3: obj}`.  If key === undefined, skip that entry.
 */
const makeByKeyReducer = key => (result, cur) => ({
  ...result,
  [cur[key]]: cur
});

module.exports = {
  makeByKeyReducer,
  createApiDict: schema =>
    Object.keys(schema).reduce((result, key) => {
      result[key] = schema[key].reduce(makeByKeyReducer("name"), {});
      return result;
    }, {})
};
