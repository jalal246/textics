/* eslint-env mocha */

const { expect } = require("chai");
const textics = require("../src/textics.js");

describe("TEXTICS", () => {
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
    const sample = " you !  ";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 2,
      chars: 4,
      spaces: 4
    });
  });

  it("works for full sentence with spaces", () => {
    const sample = " Hello my old friend ! ";
    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 1,
      words: 5,
      chars: 17,
      spaces: 6
    });
  });

  it("works with multi lines", () => {
    const sample = "\n Hello \nmy \nold \nfriend ! ";

    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 4,
      words: 5,
      chars: 17,
      spaces: 6
    });
  });

  it("returns correct number with auto gen text", () => {
    const str =
      "Hello I am testing\nMy program here\nHope it works\nPerfectly \nWell !";

    const result = textics(str);

    expect(result).to.deep.equal({
      lines: 5,
      words: 13,
      chars: 53,
      spaces: 8
    });
  });
});
