const textics = (str) => {
  let lines = 0;
  let words = 0;
  let chars = 0;
  let spaces = 0;
  if (str.length > 0) {
    let pre = str;
    if (/\r\n/.test(str)) pre = str.replace(/\r\n/g, '\n'); // exclude double char from bieng count
    let init = pre;
    if (/\n /.test(str)) init = pre.replace(/\n /g, '\n'); // exclude newline with a start spacing
    const linesArr = init.trim().split(/\r|\n/);
    lines = linesArr.length;
    let char;
    for (let i = 0; i < lines; i += 1) {
      const wordsArr = linesArr[i].trim().split(/\s+/);
      for (let k = 0; k < wordsArr.length; k += 1) {
        char = wordsArr[k].length;
        chars += char;
        if (char > 1) words += 1;
      }
    }
    spaces = lines === 1
      ? pre.length - chars
      : pre.length - chars - lines;
  }
  return {
    lines,
    words,
    chars,
    spaces,
  };
};

export default textics;
