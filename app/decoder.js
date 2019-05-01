const fs = require('fs');
const abiDecoder = require('abi-decoder');
const contractABI = require('../data/abi.json');

decode = function () {
  abiDecoder.addABI(contractABI);
  readFile(processFileContents);
};

readFile = function (callback) {
  fs.readFile('data/tx.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err);
      return;
    }

    callback(fileContents);
  })
}

processFileContents = function (fileContents) {
  try {
    const tests = JSON.parse(fileContents);

    tests.forEach(function (txs) {
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