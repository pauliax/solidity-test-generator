const loadJsonFile = require('load-json-file');

readFile = async function () {
  const fileName = 'data/tx.json';
  return loadJsonFile(fileName);
}

module.exports = {
  readFile
}