const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  reason: "invalid_integer",
  message:
    'Expected a value of type `Int` for `sections.0.equityRange.0.to` but received `""`.',
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        equityRange: [
          {
            ordinal: 6,
            from: 13,
            to: ""
          }
        ]
      }
    ]
  }
};
