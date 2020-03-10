/* eslint-env mocha */

const { expect } = require("chai");
const textics = require("../src/textics.js");

describe("main function: #testing sentences", () => {
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

  it("works with multi lines sentence", () => {
    const sample = "\n Hello \nmy \nold \nfriend ! ";

    const result = textics(sample);

    expect(result).to.deep.equal({
      lines: 5,
      words: 5,
      chars: 17,
      spaces: 6
    });
  });

  it("returns correct number with auto gen text", () => {
    const str = `Hello
 I am testing
 textics here
 Hope it works
 perfectly
 !
`;

    const result = textics(str);

    expect(result).to.deep.equal({
      lines: 7,
      words: 11,
      chars: 47,
      spaces: 10
    });
  });
});
