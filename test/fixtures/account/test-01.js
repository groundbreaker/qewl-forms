module.exports = {
  inputType: "UpdateInvestorAccountIndividualInput",
  isValid: false,
  reason: "invalid_EIN",
  testData: {
    id: "54047248-9a94-4f2b-8791-14c9cfa189bd",
    type: "INDIVIDUAL",
    status: "ACTIVE",
    paymentMethod: "CHECK",
    address: {
      address1: "505 Fifth Avenue",
      address2: null,
      city: "New York",
      state: "NY",
      postalCode: "10017",
      country: "US",
      googlePlacesId: "ChIJ2WDANQBZwokRF8cV5pXjs70"
    },
    check: {
      name: "Fake Ventures",
      enabled: true,
      address: {
        address1: "999 Fifth Avenue",
        address2: null,
        city: "New York",
        state: "NY",
        postalCode: "10017",
        country: "US"
      }
    },
    details: {
      name: "Savings Account",
      taxIdType: "EIN",
      taxId: "13-143141",
      dateOfBirth: "1997-02-04"
    }
  }
};
