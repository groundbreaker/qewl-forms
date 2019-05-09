const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  message:
    "Expected a value of type `AWSJSON` for `sections.0.info.0.content.json` but received `\"{'a': 1}\"`.",
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        info: [
          {
            content: {
              html: "<html />",
              json: "{'a': 1}"
            },
            ordinal: 0
          }
        ]
      }
    ]
  }
};
