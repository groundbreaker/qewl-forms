const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  // message:
  //   'Expected a value of type `AWSJSON` for `sections.0.info.0.content.json` but received `"Unquoted String"`.',
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        info: [
          {
            content: {
              html: "<html />",
              json: "Unquoted String"
            },
            ordinal: 0
          }
        ]
      }
    ]
  }
};
