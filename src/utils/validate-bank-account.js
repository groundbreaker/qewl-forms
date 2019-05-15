/**
 * See https://github.com/braintree/us-bank-account-validator/blob/master/src/account-number.js
 * @param {String} accountNumberToTest
 */
export default function validateAccountNumber(accountNumberToTest) {
  let reason;
  if (accountNumberToTest.length < 4) reason === "invalid_account_short";
  if (accountNumberToTest.length > 17) reason === "invalid_account_long";
  return !reason || reason;
}
