const { unifyNewLineChar, toArray } = require("./utils");

const regNewLine = /\n/g;
const regSpace = /\s/g;

function isValid(str) {
  return str && typeof str === "string" && str.length > 0;
}

/**
 * Counts lines, words, chars and spaces for a given string.
 *
 * @param {string} str
 * @returns
 */
function textics(str) {
  let lines = 0;
  let words = 0;
  let chars = 0;
  let spaces = 0;

  if (!isValid(str)) {
    return {
      lines,
      words,
      chars,
      spaces
    };
  }

  /**
   * Handle CR, LF, CR.
   */
  const unifiedStr = unifyNewLineChar(str);

  /**
   * Getting total string length.
   */
  const { length: totalLength } = unifiedStr;

  const splittedByLines = toArray(unifiedStr, regNewLine);

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
      const splittedBySpaces = toArray(trimmed, regSpace);

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

  return {
    lines,
    words,
    chars,
    spaces
  };
}

module.exports = textics;
