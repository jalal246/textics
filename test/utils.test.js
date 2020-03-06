/* eslint-env mocha */

const { expect } = require("chai");
const {
  unifyNewLineChar,
  excludeNewline,
  str2Array
} = require("../src/utils.js");

describe.only("utils", () => {
  describe("unifyNewLineChar", () => {
    it("replaces R", () => {
      const TXT_SAMPLE_R = "Hello\rThere\r!";

      const result = unifyNewLineChar(TXT_SAMPLE_R);

      expect(/\r/.test(result)).to.be.equal(false);
      expect(/\n/.test(result)).to.be.equal(true);
    });

    it("replaces RN", () => {
      const TXT_SAMPLE_R = "Hello\r\nThere\r\n!";

      const result = unifyNewLineChar(TXT_SAMPLE_R);

      expect(/\r\n/.test(result)).to.be.equal(false);
      expect(/\n/.test(result)).to.be.equal(true);
    });

    it("returns the same input", () => {
      const TXT_SAMPLE_R = "Hello\nThere\n!";

      const result = unifyNewLineChar(TXT_SAMPLE_R);

      expect(/\n/.test(result)).to.be.equal(true);
    });
  });
});
