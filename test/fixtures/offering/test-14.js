const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  reason: "invalid_string",
  // message:
  //   "Expected a value of type `String` for `sections.0.cost.0.items.0.key` but received `null`.",
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
