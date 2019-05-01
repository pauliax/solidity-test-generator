const decoder = require('./decoder');
const templates = require("./templates");

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
  if (txs === undefined || txs.length == 0) {
    return;
  }

  console.log("\n ***** \n");
  console.log('Opcode: ' + JSON.stringify(opcode));
  console.log('Decoded txs array: ' + JSON.stringify(txs));

  switch (opcode) {
    case 'RETURN':
      console.log('RETURN opcode');
      break;
    case 'REVERT':
      createRevertTestCase(txs);
      break;
    case 'STOP':
      console.log('STOP opcode');
      break;
    default:
      console.error('Unknown opcode');
  }
}

createRevertTestCase = function (txs) {
  const lastIndex = txs.length - 1;
  const lastTx = txs[lastIndex];
  const functionName = lastTx.name;

  let paramsArray = [];
  lastTx.params.forEach(function (param) {
    paramsArray.push(param.value);
  });

  const params = paramsArray.join(", ");

  const revertAssertTemplate = templates.REVERT_ASSERT({
    function: functionName,
    params: params
  });

  console.log(revertAssertTemplate);
}

module.exports = {
  generate
}