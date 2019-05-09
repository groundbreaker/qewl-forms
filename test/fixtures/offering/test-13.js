const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  testData: {
    ...goodData,
    sections: [
      {
        ...goodData.sections[0],
        cost: [
          {
            ...goodData.sections[0].cost[0],
            items: [
              {
                key: "World",
                value: null,
                ordinal: 2
              }
            ],
            ordinal: 2
          }
        ]
      }
    ]
  }
};
