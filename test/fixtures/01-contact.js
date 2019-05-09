module.exports = {
  inputType: "CreateContactInput",
  isValid: false,
  reason: "INVALID_COUNTRY",
  testData: {
    firstName: "Patrick",
    lastName: "Kilgore",
    accountId: "a6b52754-fe25-4ff3-a093-db00b5dd030e",
    status: "APPROVED",
    dateOfBirth: "18990101+05:00",
    emails: [
      {
        address: "git@pck.email",
        label: "WORK"
      },
      {
        address: "test@email.com",
        label: "HOME"
      }
    ],
    phones: [
      {
        number: "13148030842",
        label: "HOME"
      }
    ]
  }
};
