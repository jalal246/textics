/**
 * Counts lines, words, chars and spaces for a given string.
 *
 * @param {string} str
 * @returns
 */
function textics(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input is not string!");
  }

  let lines = 0;
  let words = 0;
  let chars = 0;
  let spaces = 0;

  /**
   * Getting total string length.
   */
  const totalInputLength = str.length;

  if (totalInputLength === 0)
    return {
      lines,
      words,
      chars,
      spaces,
    };

  const splittedByLines = str.split(/(?:\r?\n)/g) || [];

  lines = splittedByLines.length;

  splittedByLines.forEach((line) => {
    const lineLength = line.length;

    const trimmedLine = line.trim();
    const trimmedLineLength = trimmedLine.length;

    /**
     * Calculates outer space.
     */
    spaces += lineLength - trimmedLineLength;

    /**
     * When zero, empty line.
     */
    if (trimmedLineLength !== 0) {
      const splittedBySpaces = trimmedLine.split(/\s/g);

      const wordsInLine = splittedBySpaces.length;
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

      splittedBySpaces.forEach((word) => {
        chars += word.length;
      });
    }
  });

  return {
    lines,
    words,
    chars,
    spaces,
  };
}

module.exports = { textics };
