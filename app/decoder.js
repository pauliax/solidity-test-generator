const config = require('config');
const loadJsonFile = require('load-json-file');
const abiDecoder = require('abi-decoder');

const FILENAME_ABI = config.get('input.abi');
const contractABI = loadJsonFile.sync(FILENAME_ABI);

abiDecoder.addABI(contractABI);

decode = function (calldata) {
  try {
    const decodedData = abiDecoder.decodeMethod(calldata);
    return decodedData;
  } catch (err) {
    console.error("Error decoding data.");
    return;
  }
};

module.exports = {
  decode
}