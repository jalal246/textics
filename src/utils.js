/**
 * \r = CR (Carriage Return) → Used as a new line character in Mac OS before X
 * \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
 * \r\n = CR + LF → Used as a new line character in Windows
 *
 * It replaces \r or \r\n with \n. Which enable us to deal with unique new line
 * character.
 *
 * @see {https://stackoverflow.com/a/15433225/6348157}
 * @param {string} str
 * @returns {string} modified with str with \n as new line
 */
function unifyNewLineChar(str) {
  return /\r|\r\n/.test(str) ? str.replace(/\r|\r\n/g, "\n") : str;
}

/**
 * Checks string, if there is spaces in new lines, it removes it.
 *
 * @param {string} str
 * @returns {string} -without spaces in new lines
 */
function excludeNewline(str) {
  return /\n /.test(str) ? str.replace(/\n /g, "\n") : str;
}

/**
 * Splits each line of given string to array element.
 *
 * @param {string} str
 * @returns {Array}
 */
function str2Array(str) {
  return str.trim().split(/\r|\n/);
}

module.exports = {
  unifyNewLineChar,
  excludeNewline,
  str2Array
};
