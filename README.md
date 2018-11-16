# arw-parser

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]
  
Parse an ARW text file used in some scientific instrument

## Installation

`$ npm install arw-parser`

## [API Documentation](https://cheminfo-js.github.io/arw-parser/)

## Example

```js
const {parse} = require('arw-parser');

const data = `"Instrument:"  "XYZ"
1   2
3   4
5   6
7   8`;

const result = parse(data);
/* result ->
{
    info: {
        Instrument:'XYZ'
    },
    data: {
        x:[1,3,5,7],
        y:[2,4,6,8]
    }
}
*/
```


## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/arw-parser.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/arw-parser
[travis-image]: https://img.shields.io/travis/cheminfo-js/arw-parser/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/arw-parser
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo-js/arw-parser.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo-js/arw-parser
[david-image]: https://img.shields.io/david/cheminfo-js/arw-parser.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/arw-parser
[download-image]: https://img.shields.io/npm/dm/arw-parser.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/arw-parser
