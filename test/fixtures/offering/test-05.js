const { testData: goodData } = require("./test-00-valid-data");

module.exports = {
  inputType: "UpdateDealInput",
  isValid: false,
  testData: {
    ...goodData,
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
    }
  }
};
