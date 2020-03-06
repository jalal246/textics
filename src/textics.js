/**
 * exclude double char from being count
 */
function excludeDoubleChar(str) {
  return /\r\n/.test(str) ? str.replace(/\r\n/g, "\n") : str;
}

/**
 * exclude newline with a start spacing
 */
function excludeNewline(str) {
  return /\n /.test(str) ? str.replace(/\n /g, "\n") : str;
}

/**
 *
 * split each line to array
 * @param {*} str
 * @returns
 */
function splitToArray(str) {
  return str.trim().split(/\r|\n/);
}

function count(linesArr) {
  let words = 0;
  let chars = 0;

  const lines = linesArr.length;

  let char;
  for (let i = 0; i < lines; i += 1) {
    const wordsArr = linesArr[i].trim().split(/\s+/);
    for (let k = 0; k < wordsArr.length; k += 1) {
      char = wordsArr[k].length;
      chars += char;
      if (char > 1) words += 1;
    }
  }

  return {
    lines,
    words,
    chars
  };
}

/**
 * Counts lines, words, chars and spaces for a given string.
 *
 * @param {string} str
 * @returns
 */
function initCounting(str) {
  const pre = excludeDoubleChar(str);

  const init = excludeNewline(pre);

  const linesArr = splitToArray(init);

  const { lines, words, chars } = count(linesArr);

  const spaces = lines === 1 ? pre.length - chars : pre.length - chars - lines;

  return {
    lines,
    words,
    chars,
    spaces
  };
}

/**
 * Validates then calls function count.
 */
function textics(str) {
  let lines = 0;
  let words = 0;
  let chars = 0;
  let spaces = 0;

  if (str && typeof str === "string" && str.length > 0) {
    ({ lines, words, chars, spaces } = initCounting(str));
  }

  return {
    lines,
    words,
    chars,
    spaces
  };
}

module.exports = textics;
