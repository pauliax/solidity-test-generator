const decoder = require('./decoder');

generate = function (fileContents) {
  processFileContents(fileContents);
}

processFileContents = function (jsonFile) {
  try {
    jsonFile.forEach(function (txs) {
      Object.keys(txs).forEach(function (key) {
        const calldata = txs[key].calldata;

        if (calldata !== undefined) {
          decoder.decode(calldata).then(decodedData => {
            if (decodedData !== undefined) {
              console.log(decodedData);
            }
          });
        }
      })
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  generate
}