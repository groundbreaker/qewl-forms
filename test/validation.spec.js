/* global describe, expect, it */

const { createValidator } = require("../src/validation");
const fs = require("fs");
const path = require("path");
const { apiSchema: currentSchema } = require("./reference/20190508-apiSchema");
const { apiSchema: invalidType } = require("./reference/invalid-type");
const { apiSchema: invalidScalar } = require("./reference/invalid-scalar");

const { createApiDict } = require("./test-utils");

const apiSchema = createApiDict(currentSchema);
const fixturesPath = path.resolve(__dirname, "fixtures");

describe("Validation creator...", () => {
  it("...throws on missing inputType.", () => {
    expect(() =>
      createValidator({
        apiSchema,
        inputType: "CreateInvalidInput"
      })
    ).toThrow();
  });
  it("...throws on unhandled type.", () => {
    expect(() =>
      createValidator({
        apiSchema: invalidType,
        inputType: "CreateContactInput"
      })
    ).toThrow("Could not parse type");
  });
  it("...throws on unhandled scalar.", () => {
    expect(() =>
      createValidator({
        apiSchema: invalidScalar,
        inputType: "CreateContactInput"
      })
    ).toThrow("MissingLastNameType");
  });
});

describe("Fixtures for...", () => {
  fs.readdirSync(fixturesPath).forEach(folder => {
    describe(folder, () => {
      const currentFolder = path.join(fixturesPath, folder);
      fs.readdirSync(currentFolder).forEach(fixture => {
        describe(`${fixture}...`, () => {
          const fixturePath = `${currentFolder}/${fixture}`;
          const {
            inputType,
            testData,
            isValid,
            errorMatch,
            reason,
            message
          } = require(fixturePath); // TODO: Make async.

          let validator;

          // Make sure superstruct does its thing.
          it(`...can construct validator without errors.`, () => {
            validator = createValidator({ apiSchema, inputType });
            expect(typeof validator).toBe("function");
          });

          // Does validation match fixture definition?
          it(`...returns the correct validation result.`, () => {
            if (isValid) {
              expect(() => validator(testData)).not.toThrow(errorMatch);
            } else {
              expect(() => validator(testData)).toThrow(errorMatch);
            }
          });

          // Does the reason match (if defined for this fixture)
          if (reason) {
            it(`...returns the correct reason result.`, () => {
              try {
                validator(testData);
              } catch (err) {
                expect(err.reason).toBe(reason);
              }
            });
          }

          // Does the message match (if defined for this fixture)
          if (message) {
            it(`...returns the correct error message.`, () => {
              try {
                validator(testData);
              } catch (err) {
                expect(err.message).toBe(message);
              }
            });
          }
        });
      });
    });
  });
});
