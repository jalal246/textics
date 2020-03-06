/* eslint-disable no-unused-expressions */

const { unifyNewLineChar, removeSpacesFromStart, toArray } = require("./utils");

let lines = 0;
let words = 0;
let chars = 0;
let spaces = 0;

function countInEachLine(lineOfWords) {
  lineOfWords.forEach(wrd => {
    const { length } = wrd;

    if (length > 0) {
      chars += length;
      words += 1;
    }
  });
}

/**
 * Counts lines, words, chars and spaces for a given string.
 *
 * @param {string} str
 * @returns
 */
function startCounting(str) {
  const unified = unifyNewLineChar(str);

  const trimmedStr = unified.trim();

  const trimmedEachLine = removeSpacesFromStart(trimmedStr);

  const linesArr = toArray(trimmedEachLine);

  lines = linesArr.length;

  linesArr.forEach(line => {
    const splittedArr = line.split(" ");

    countInEachLine(splittedArr);
  });

  spaces = unified.length - chars;

  if (lines > 1) {
    spaces -= lines;
  }
}

/**
 * Validates then calls function count.
 */
function textics(str) {
  lines = 0;
  words = 0;
  chars = 0;
  spaces = 0;

  if (str && typeof str === "string" && str.length > 0) {
    startCounting(str);
  }

  return {
    lines,
    words,
    chars,
    spaces
  };
}

module.exports = textics;
