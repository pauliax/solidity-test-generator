const config = require('config');
const loadJsonFile = require('load-json-file');
const generator = require('./app/generator');

const FILENAME_TXS = config.get('input.txs');

run = async function () {
  const fileContents = await loadJsonFile(FILENAME_TXS);
  generator.generate(fileContents);
}

run();