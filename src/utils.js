/**
 * Replaces \r or \r\n with \n. Which enables us to deal with unique new line
 * character.
 *
 * Note:
 * \r = CR (Carriage Return) → Used as a new line character in Mac OS before X
 * \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
 * \r\n = CR + LF → Used as a new line character in Windows
 *
 * @see {https://stackoverflow.com/a/15433225/6348157}
 * @param {string} [str=""]
 * @param {RegExp} [LF="\n"]
 * @returns {string} modified with str with \n as new line
 */
function unifyNewLineChar(str = "", LF = "\n") {
  const re = /\r|\r\n/g;
  const unified = LF;

  return re.test(str) ? str.replace(re, unified) : str;
}

/**
 * Checks string, if there is spaces in new lines, it removes it.
 *
 * @param {string} [str=""]
 * @param {RegExp} [replaceWith="\n"] - LF new line.
 * @returns
 */
function removeSpacesFromStart(str = "", replaceWith = "\n") {
  const re = /\n\s+/g;

  return re.test(str) ? str.replace(re, replaceWith) : str;
}

/**
 *
 * Splits each line of given string to array element.
 *
 * @param {string} str
 * @param {RegExp} [basedOn=/\n/] - LF new line.
 * @returns
 */
function toArray(str, basedOn = /\n/) {
  return str.split(basedOn);
}

module.exports = {
  unifyNewLineChar,
  removeSpacesFromStart,
  toArray
};
