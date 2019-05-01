const fs = require('fs');
const abiDecoder = require('abi-decoder');
const contractABI = require('../data/abi.json');
const loadJsonFile = require('load-json-file');

decode = function () {
  abiDecoder.addABI(contractABI);
  readFile(processFileContents);
};

readFile = async function (callback) {
  const jsonFile = await loadJsonFile('data/tx.json');

  if (jsonFile !== undefined) {
    callback(jsonFile);
  }
}

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