/* eslint-env mocha */
import chai from 'chai';
import textics from '../src/textics';

const expect = chai.expect;

const p = '  you  w got the  power   ';
let txt = '';

const LOOP = 1;
const linesNum = LOOP;
const wordsNum = 4 * linesNum;
const charNum = 15 * linesNum;
const spacesNum = 11 * linesNum;


describe('TEXTICS', () => {
  it('Make text to be tested', () => {
    for (let i = 0; i < LOOP; i += 1) {
      txt += `${p}\n`;
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
});
