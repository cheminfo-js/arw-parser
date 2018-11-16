'use strict';

const { parseXY } = require('xy-parser');

function parse(text) {
  let parsed = parseXY(text, {
    arrayType: 'xxyy',
    keepInfo: true
  });

  let info = {};
  for (let item of parsed.info) {
    let parts = item.value.split('\t').map((part) => part.replace(/^"(.*?)[: ]*"$/, '$1'));
    info[parts[0]] = parts[1];
  }
  return {
    info,
    data: {
      x: parsed.data[0],
      y: parsed.data[1]
    }
  };
}

module.exports = {
  parse
};
