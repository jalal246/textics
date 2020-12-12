const { expect } = require("chai");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const { textics } = require("../src/textics");

describe("Testing with file", () => {
  it("works with first file", () => {
    const content = readFileSync(resolve(__dirname, "txtTest-1.txt"), "utf8");

    const result = textics(content);

    expect(result).to.be.deep.equal({
      words: 8,
      lines: 4,
      chars: 40,
      spaces: 8,
    });
  });

  it("works with second file", () => {
    const content = readFileSync(resolve(__dirname, "txtTest-2.txt"), "utf8");

    const result = textics(content);

    expect(result).to.be.deep.equal({
      words: 2,
      lines: 2,
      chars: 10,
      spaces: 1,
    });
  });

  it("works with third file", () => {
    const content = readFileSync(resolve(__dirname, "txtTest-3.txt"), "utf8");

    const result = textics(content);

    expect(result).to.be.deep.equal({
      words: 8,
      lines: 4,
      chars: 40,
      spaces: 11,
    });
  });
});
