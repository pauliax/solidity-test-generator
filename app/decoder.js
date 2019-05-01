const config = require('config');
const loadJsonFile = require('load-json-file');
const abiDecoder = require('abi-decoder');

const FILENAME_ABI = config.get('input.abi');

decode = function (calldata) {
  const contractABI = loadJsonFile.sync(FILENAME_ABI);

  abiDecoder.addABI(contractABI);

  const result = abiDecoder.decodeMethod(calldata);

  return result;
};

module.exports = {
  decode
}