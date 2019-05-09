module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  testData: {
    id: "99130df8-26b1-4a7a-ae98-7805a09e83a6",
    deadline: "2019-06-29",
    description: null,
    holdTime: 20,
    holdTimeType: {
      dispatchConfig: null,
      _targetInst: null,
      _dispatchListeners: null,
      _dispatchInstances: null,
      nativeEvent: null,
      type: null,
      target: null,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      defaultPrevented: null,
      isTrusted: null
    },
    investmentEntityId: "1fc10620-ce06-41cc-81a9-0fd104f60647",
    investmentMin: {
      value: 1000000,
      type: "USD"
    },
    name: "2315 W Chicago",
    files: [],
    photos: [],
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
            content: null,
            ordinal: 0
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
                key: "Hello",
                value: null
              },
              {
                key: null,
                value: "World"
              }
            ],
            ordinal: 1
          }
        ],
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
        ],
        stack: [
          {
            ordinal: 3,
            showDebt: true,
            debtType: "BRIDGE_LOAN",
            showMezzanine: true
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
            to: ""
          }
        ],
        exit: [
          {
            ordinal: 7,
            from: "",
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
