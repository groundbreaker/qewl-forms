const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  reason: "missing_required",
  // message:
  //   "Expected a value of type `Int` for `sections.0.list.0.items.0.ordinal` but received `undefined`.",
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        list: [
          {
            items: [
              {
                key: "Hello",
                value: "World"
              }
            ],
            ordinal: 1
          }
        ]
      }
    ]
  }
};
