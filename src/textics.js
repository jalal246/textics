// removes extra spaces to split correctly
// credit: https://stackoverflow.com/questions/18679576/counting-words-in-string
const initStr = str => str
  .trim()
  .replace(/[ ]{2,}/gi, ' ') // 2 or more space to 1
  .replace(/\n /, '\n'); // exclude newline with a start spacing

const getLen = str => str.length;

const strSplit = (str, reg) => str.split(reg);

const textics = (str) => {
  const init = initStr(str);
  const linesArr = strSplit(init, /\r\n|\r|\n/);
  const lines = getLen(linesArr);
  let words = 0;
  let chars = 0;
  for (let i = 0; i < lines; i += 1) {
    const wordsArr = strSplit(linesArr[i], ' ');
    const rowWords = getLen(wordsArr);
    words += rowWords;
    for (let k = 0; k < rowWords; k += 1) {
      chars += getLen(wordsArr[k]);
    }
  }
  return {
    lines,
    words,
    chars,
    spaces: str.length - chars - lines,
  };
};


export default textics;
