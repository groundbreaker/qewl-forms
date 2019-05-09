module.exports = {
  inputType: "CreateContactInput",
  isValid: false,
  reason: "unexpected_object",
  testData: {
    firstName: "Patrick",
    lastName: "Kilgore",
    accountId: "437ac386-8bb7-4d4f-8db9-e316ea478ff5",
    status: "APPROVED",
    title: [],
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
