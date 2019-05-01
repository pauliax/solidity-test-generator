const config = require('config');
const loadJsonFile = require('load-json-file');
const abiDecoder = require('abi-decoder');

const FILENAME_ABI = config.get('input.abi');

decode = async function (fileContents) {
  const contractABI = await loadJsonFile(FILENAME_ABI);
  abiDecoder.addABI(contractABI);
  processFileContents(fileContents);
};

processFileContents = function (jsonFile) {
  try {
    jsonFile.forEach(function (txs) {
      Object.keys(txs).forEach(function (key) {
        const calldata = txs[key].calldata;

        if (calldata !== undefined) {
          const decodedData = abiDecoder.decodeMethod(calldata);

          if (decodedData !== undefined) {
            console.log(decodedData);
          }
        }
      })
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  decode
}