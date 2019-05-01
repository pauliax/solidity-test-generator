const config = require('config');
const loadJsonFile = require('load-json-file');
const abiDecoder = require('abi-decoder');

const FILENAME_ABI = config.get('input.abi');
const contractABI = loadJsonFile.sync(FILENAME_ABI);

abiDecoder.addABI(contractABI);

decode = function (calldata) {
  return abiDecoder.decodeMethod(calldata);
};

module.exports = {
  decode
}