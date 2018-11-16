'use strict';

const fs = require('fs');
const { join } = require('path');

const { parse } = require('..');

test('arw-parser test', () => {
  let text = fs.readFileSync(join(__dirname, 'data.txt'), 'utf8');
  let parsed = parse(text);
  expect(parsed.data.x).toHaveLength(2501);
  expect(parsed.data.y).toHaveLength(2501);
  expect(parsed.info.SampleName).toBe('Test sample');
  expect(parsed).toMatchSnapshot();
  console.log(parsed.info);
});
