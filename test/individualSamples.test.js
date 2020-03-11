/* eslint-env mocha */

const { expect } = require("chai");
const { textics } = require("../src/textics.js");

describe("main function: #testing individual cases", () => {
  it("tests all spaces", () => {
    const sample = "     ";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 0,
      chars: 0,
      spaces: 5
    });
  });

  it("tests all new lines", () => {
    const sample = `\n\n\n\n`;
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 5,
      words: 0,
      chars: 0,
      spaces: 0
    });
  });

  it("tests all characters", () => {
    const sample = `123456`;
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 1,
      chars: 6,
      spaces: 0
    });
  });

  it("tests multi lines mixed", () => {
    const str = `1
2
3
4
5
6`;

    const result = textics(str);

    expect(result).to.deep.equal({
      lines: 6,
      words: 6,
      chars: 6,
      spaces: 0
    });
  });

  it("returns correct number for 1 word", () => {
    const sample = "you";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 1,
      chars: 3,
      spaces: 0
    });
  });

  it("returns correct number for 1-word with extra spaces", () => {
    const sample = "   you   ";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 1,
      chars: 3,
      spaces: 6
    });
  });

  it("returns correct number for 2-words with extra spaces", () => {
    const sample = " you you ";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 2,
      chars: 6,
      spaces: 3
    });
  });
});
