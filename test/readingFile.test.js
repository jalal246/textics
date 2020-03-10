const { expect } = require("chai");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const textics = require("../src/textics");

describe.only("Testing with file", () => {
  it("works", () => {
    const content = readFileSync(resolve(__dirname, "txtTest.txt"), "utf8");

    const result = textics(content);

    expect(result).to.be.deep.equal({
      words: 447,
      lines: 9, // am not sure about line number.
      chars: 2510,
      spaces: 442
    });
  });
});
