const abiDecoder = require('abi-decoder');
const contractABI = require('../data/abi.json');

decode = function (fileContents) {
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