[![NPM](https://nodei.co/npm/textics.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/textics/)

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](travis-ci.org/Jimmy02020/textics)
[![Codecov](https://img.shields.io/codecov/c/github/codecov/example-python.svg?style=flat-square)](https://codecov.io/gh/Jimmy02020/textics)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/Jimmy02020/textics/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Jimmy02020/textics/pulls)


> Text Statistics

`textics` counts lines, words, chars and spaces for a given string.

Getting Started
---------------

NPM
```sh
npm install textics
```

CDN
```sh
https://unpkg.com/textics/dist/
```

Syntax
-------

### textics(string)

returns object: `{ lines, words, chars, spaces }`



Using textics
----------

```javascript
const textics = require('textics')

const stat = textics('you got the power')

console.log(stat);
//
{
  lines: 1,
  words: 4,
  chars: 14,
  spaces: 3,
}
//

```

Using textics with stream
-------------------------
See :point_right: [textics-stream](https://github.com/Jimmy02020/textics-stream) :fire:

Tests
-----

```sh
npm test
```


License
-------

This project is licensed under the [MIT License](https://github.com/Jimmy02020/textics/blob/master/LICENSE)
