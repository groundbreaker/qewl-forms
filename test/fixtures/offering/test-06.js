const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  // message:
  //   "Expected a value of type `{html,json}` for `sections.0.info.0.content` but received `null`.",
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        info: [
          {
            content: null,
            ordinal: 0
          }
        ]
      }
    ]
  }
};
