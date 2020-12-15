# textics

> `text/ics` counts lines, words, chars and spaces for a given string :page_with_curl: :memo:

```bash
npm install textics
```

## API

```js
const { lines, words, chars, spaces } = textics(str);
```

### Example

```js
const { textics } = require("textics");

const result = textics("you got the power");

expect(result).to.deep.equal({
  lines: 1,
  words: 4,
  chars: 14,
  spaces: 3
});
```

### Using textics with stream

- [textics-stream](https://github.com/jalal246/textics-stream)

### Related projects

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with zero config.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for
  projects production.

- [move-position](https://github.com/jalal246/move-position) - Moves element in given array form index-A to index-B

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/textics/blob/master/LICENSE)
