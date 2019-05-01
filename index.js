const config = require('config');
const loadJsonFile = require('load-json-file');
const decoder = require('./app/decoder');

const FILENAME_TXS = config.get('input.txs');

run = async function () {
  const fileContents = await loadJsonFile(FILENAME_TXS);
  decoder.decode(fileContents);
}

run();