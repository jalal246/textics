
const textics = (str) => {
  // empty str
  if (str.length === 0) {
    return {
      lines: 0,
      words: 0,
      chars: 0,
      spaces: 0,
    };
  }
  const linesArr =
    str.trim()
      .replace(/\n /, '\n') // exclude newline with a start spacing
      .split(/\r\n|\r|\n/);
  // empty str or one sentence no lines
  const lines = linesArr.length;
  // if no lines
  let words = 0;
  let chars = 0;
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
    chars,
    spaces: str.length - chars - lines,
  };
};


export default textics;
