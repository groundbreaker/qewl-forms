/* global describe, expect, it */
import { makeByKeyReducer } from "./test-utils";
import checkEmail from "../src/utils/validate-rfc822-email";

describe("Test utils...", () => {
  it("...`makeByKeyReducer` works.", () => {
    const input = [{ name: "bob", data: 1 }, { name: "kate", data: [1, 2, 3] }];
    const output = input.reduce(makeByKeyReducer("name"), {});
    expect(output).toStrictEqual({
      bob: { name: "bob", data: 1 },
      kate: { name: "kate", data: [1, 2, 3] }
    });
  });

  it("...`checkEmail` works.", () => {
    const valid = checkEmail("git@pck.email");
    const invalid = checkEmail("Not@a.@ne.mail");
    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });
});
