module.exports = {
  inputType: "CreateContactInput",
  isValid: false,
  reason: "phone_not_a_number",
  testData: {
    firstName: "Patrick",
    lastName: "Kilgore",
    accountId: "437ac386-8bb7-4d4f-8db9-e316ea478ff5",
    status: "APPROVED",
    emails: [
      {
        address: "test@email.com",
        label: "HOME"
      }
    ],
    phones: [
      {
        number: "+1----------",
        label: "WORK"
      }
    ]
  }
};
