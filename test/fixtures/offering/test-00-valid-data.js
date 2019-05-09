module.exports = {
  inputType: "UpdateDealInput",
  isValid: true,
  testData: {
    id: "99130df8-26b1-4a7a-ae98-7805a09e83a6",
    deadline: "2019-06-29",
    description: null,
    holdTime: 20,
    holdTimeType: "MONTHS",
    investmentEntityId: "1fc10620-ce06-41cc-81a9-0fd104f60647",
    investmentMin: {
      value: 1000000,
      type: "USD"
    },
    name: "2315 W Chicago",
    propertyType: ["OFFICE", "INDUSTRIAL"],
    total: {
      type: "USD",
      value: 200000000
    },
    type: "SINGLE_ASSET",
    sections: [
      {
        name: "Financials",
        info: [
          {
            content: {
              html: "<html />",
              json: '"AWSJSON example string"'
            },
            ordinal: 0
          },
          {
            content: {
              html: "<html />",
              json: "{}"
            },
            ordinal: 1
          },
          {
            content: {
              html: "<html />",
              json: true
            },
            ordinal: 2
          },
          {
            content: {
              html: "<html />",
              json: "[1, 2, 3]"
            },
            ordinal: 3
          },
          {
            content: {
              html: "<html />",
              json: `{\"upvotes\": 10}`
            },
            ordinal: 3
          },
          {
            content: {
              html: "<html />",
              json: 1000
            },
            ordinal: 3
          }
        ],
        ordinal: 0,
        list: [
          {
            items: [
              {
                ordinal: 0,
                key: "Hello",
                value: "World"
              },
              {
                ordinal: 1,
                key: "Hello",
                value: "Value"
              },
              {
                ordinal: 2,
                key: "Key",
                value: "World"
              }
            ],
            ordinal: 1
          }
        ],
        cost: [
          {
            capitalization: {
              value: 100000,
              type: "USD"
            },
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
                value: {
                  type: "USD",
                  value: 1000000
                },
                ordinal: 2
              },
              {
                key: "Returns",
                value: {
                  type: "USD",
                  value: 2999900
                },
                ordinal: 3
              }
            ],
            ordinal: 2
          }
        ],
        stack: [
          {
            ordinal: 3,
            showDebt: true,
            debtType: "BRIDGE_LOAN",
            showMezzanine: true,
            notes: "SOME STRING"
          }
        ],
        coc: [
          {
            ordinal: 4,
            initial: 29,
            stabilized: 2323,
            average: 2313
          }
        ],
        irr: [
          {
            ordinal: 5,
            from: 10,
            to: 6,
            type: "GROSS"
          }
        ],
        equityRange: [
          {
            ordinal: 6,
            from: 13,
            to: 3
          }
        ],
        exit: [
          {
            ordinal: 7,
            from: 19,
            to: 23
          }
        ],
        sale: [
          {
            ordinal: 8,
            from: {
              type: "USD",
              value: 3000000
            },
            to: {
              type: "USD",
              value: 3000000
            }
          }
        ]
      }
    ]
  }
};
