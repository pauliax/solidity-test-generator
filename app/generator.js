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
            decodedData['caller'] = caller;
            decodedData['value'] = value;
            decodedTxs.push(decodedData);
          }
        }
      });

      createTestCase(opcode, decodedTxs);
    });
  } catch (err) {
    console.error(err);
  }
}

createTestCase = function (opcode, txs) {
  console.log("\n ***** \n");
  console.log('Opcode: ' + JSON.stringify(opcode));
  console.log('Decoded txs array: ' + JSON.stringify(txs));

  switch (opcode) {
    case 'RETURN':
      console.log('RETURN opcode');
      break;
    case 'REVERT':
      console.log('REVERT opcode');
      break;
    case 'STOP':
      console.log('STOP opcode');
      break;
    default:
      console.error('Unknown opcode');
  }
}

module.exports = {
  generate
}