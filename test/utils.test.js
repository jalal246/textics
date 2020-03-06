/* eslint-env mocha */

const { expect } = require("chai");
const {
  unifyNewLineChar,
  removeSpacesFromStart,
  newLines2Array
} = require("../src/utils.js");

describe.only("utils", () => {
  describe("unifyNewLineChar", () => {
    it("replaces R", () => {
      const TXT_SAMPLE = "Hello\rThere\r!";

      const result = unifyNewLineChar(TXT_SAMPLE);

      expect(/\r/.test(result)).to.be.equal(false);
      expect(/\n/.test(result)).to.be.equal(true);
    });

    it("replaces RN", () => {
      const TXT_SAMPLE = "Hello\r\nThere\r\n!";

      const result = unifyNewLineChar(TXT_SAMPLE);

      expect(/\r\n/.test(result)).to.be.equal(false);
      expect(/\n/.test(result)).to.be.equal(true);
    });

    it("returns the same input", () => {
      const TXT_SAMPLE = "Hello\nThere\n!";

      const result = unifyNewLineChar(TXT_SAMPLE);

      expect(/\n/.test(result)).to.be.equal(true);
    });
  });

  describe("removeSpacesFromStart", () => {
    it("removes spaces form new line", () => {
      const TXT_SAMPLE = "\n               Hello There!";
      const expected = "\nHello There!";

      const result = removeSpacesFromStart(TXT_SAMPLE);

      expect(result).to.be.equal(expected);
    });

    it("stays the same if it's not new line (case 1)", () => {
      const TXT_SAMPLE = "Hello    There!";
      const expected = "Hello    There!";

      const result = removeSpacesFromStart(TXT_SAMPLE);

      expect(result).to.be.equal(expected);
    });

    it("stays the same if it's not new line (case 2)", () => {
      const TXT_SAMPLE = "            Hello There!";
      const expected = "            Hello There!";

      const result = removeSpacesFromStart(TXT_SAMPLE);

      expect(result).to.be.equal(expected);
    });
  });

  it("newLines2Array", () => {
    const TXT_SAMPLE = "\nHello\nThere\n!";
    const result = newLines2Array(TXT_SAMPLE);

    expect(result).to.be.an("array");
    expect(result.length).to.be.equal(3);
    expect(result).to.have.ordered.members(["Hello", "There", "!"]);
  });
});
