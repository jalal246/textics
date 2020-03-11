// /**
//  * validates string
//  *
//  * @param {string} str
//  * @returns {boolean}
//  */
// function isValid(str) {
//   return str && typeof str === "string" && str.length > 0;
// }

/**
 * Extracts new line used char in a given string.
 *
 * @param {string} str
 * @returns {string}
 */
function getNewLineChar(str) {
  const NL_R = /\r/g;
  const NL_RN = /\r\n/g;
  const NL_N = /\n/g;

  let lineChar = NL_N;

  if (NL_R.test(str)) {
    lineChar = NL_R;
  } else if (NL_RN.test(str)) {
    lineChar = NL_RN;
  }

  return lineChar;
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

  // if (!isValid(str)) {
  //   return {
  //     lines,
  //     words,
  //     chars,
  //     spaces
  //   };
  // }

  const regNewLine = getNewLineChar(str);

  const regSpace = /\s/g;

  /**
   * Getting total string length.
   */
  const { length: totalLength } = str;

  const splittedByLines = str.split(regNewLine);

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
     * When zero, empty line.
     */
    if (trimmedLength !== 0) {
      const splittedBySpaces = trimmed.split(regSpace);

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

module.exports = { textics, getNewLineChar };
