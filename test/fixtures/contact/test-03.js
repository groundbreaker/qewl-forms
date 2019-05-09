module.exports = {
  inputType: "CreateContactInput",
  isValid: false,
  reason: "invalid_UUID",
  testData: {
    firstName: "Patrick",
    lastName: "Kilgore",
    accountId: "a6b52754INVALID0b5dd030e",
    status: "APPROVED",
    emails: [
      {
        address: "git@pck.email",
        label: "WORK"
      },
      {
        address: "test@email.com",
        label: "HOME"
      }
    ]
  }
};
