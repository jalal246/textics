/* eslint-disable no-unused-expressions */

const { unifyNewLineChar } = require("./utils");

let lines;
let words;
let chars;
let spaces;

/**
 * Counts lines, words, chars and spaces for a given string.
 *
 * @param {string} str
 * @returns
 */
function startCounting(str) {
  /**
   * Handle CR, LF, CR.
   */
  const unifiedStr = unifyNewLineChar(str);

  /**
   * Getting total string length.
   */
  const { length: totalLength } = unifiedStr;

  const splittedByLines = unifiedStr.split(/\n/g) || [];

  ({ length: lines } = splittedByLines);

  splittedByLines.forEach(line => {
    const { length: lineLength } = line;

    const trimmed = line.trim();

    const { length: trimmedLength } = trimmed;

    /**
     * Calculates outer space.
     */
    spaces += lineLength - trimmedLength;

    /**
     * When zero, all line is spaces.
     */
    if (trimmedLength !== 0) {
      const splittedBySpaces = trimmed.split(" ") || [];

      const { length: wordsInLine } = splittedBySpaces;

      words += wordsInLine;

      /**
       * if zero, then it's one word without spaces
       */
      if (wordsInLine > 1) {
        /**
         * ["w1", "w2", "w3"].length = 3.
         * How many spaces? length -1
         */
        spaces += wordsInLine - 1;
      }
    }
  });

  if (words > 0) {
    /**
     * since total length included spaces and lines we substrate.
     */
    chars = totalLength - spaces;

    if (lines > 1) {
      chars -= lines - 1;
    }
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
