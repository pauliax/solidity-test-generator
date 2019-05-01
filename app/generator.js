const decoder = require('./decoder');

generate = function (fileContents) {
  processFileContents(fileContents);
}

processFileContents = function (jsonFile) {
  try {
    jsonFile.forEach(function (txs) {
      const opcode = txs['opcode'];
      const decodedTxs = [];

      Object.keys(txs).forEach(function (key) {
        const tx = txs[key];

        const caller = tx.caller;
        const value = tx.call_value;
        const calldata = tx.calldata;

        if (calldata !== undefined) {
          const decodedData = decoder.decode(calldata);

          if (decodedData !== undefined) {
            decodedTxs.push(decodedData);
          }
        }
      });

      console.log('Decoded txs array: ' + JSON.stringify(decodedTxs));
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  generate
}