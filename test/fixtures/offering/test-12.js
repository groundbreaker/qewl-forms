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
            capitalization: "0[object Object]null[object Object]",
            items: [
              {
                key: "Deck",
                value: {
                  type: "USD",
                  value: 3000000
                },
                ordinal: 0
              },
              {
                key: "World",
                value: null,
                ordinal: 2
              },
              {
                key: null,
                value: {
                  type: "USD",
                  value: 2999900
                },
                ordinal: 3
              }
            ],
            ordinal: 2
          }
        ]
      }
    ]
  }
};
