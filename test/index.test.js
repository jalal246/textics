/* eslint-env mocha */
import chai from 'chai';
import textics from '../src/textics';

const expect = chai.expect;

const p = '  you  w got the  power   ';
let txt = '';

const LOOP = 21809;
const linesNum = LOOP;
const wordsNum = 4 * linesNum;
const charNum = 15 * linesNum;
const spacesNum = 11 * linesNum;


describe('TEXTICS', () => {
  it('Make text to be tested', () => {
    let nl = 0;
    for (let i = 0; i < LOOP; i += 1) {
      nl += 1;
      if (nl === 1) txt += `${p}\r`;
      else if (nl === 2) txt += `${p}\r\n`;
      else txt += `${p}\n`;
      if (nl === 3) nl = 0;
    }
  });
  it('returns correct stats', () => {
    // console.log(textics(txt));
    expect(textics(txt)).to.deep.equal({
      lines: linesNum,
      words: wordsNum,
      chars: charNum,
      spaces: spacesNum,
    });
  });
  it('checks empty string', () => {
    expect(textics('')).to.deep.equal({
      lines: 0,
      words: 0,
      chars: 0,
      spaces: 0,
    });
  });
  it('checks empty string', () => {
    expect(textics(p)).to.deep.equal({
      lines: 1,
      words: 4,
      chars: 15,
      spaces: 11,
    });
  });
});
