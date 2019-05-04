const decoder = require('./decoder');
const templates = require("./templates");

const opcodes = {
  RETURN: 'RETURN',
  STOP: 'STOP',
  REVERT: 'REVERT'
}

let testCaseCounter = 1;

generate = function (fileContents) {
  const testCasesArray = processFileContents(fileContents);
  const testCases = testCasesArray.join("\n\n");
  console.log(testCases);
}

processFileContents = function (jsonFile) {
  try {
    let testCases = [];

    jsonFile.forEach(function (txs) {
      const opcode = txs['opcode'];

      let decodedTxs = [];

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
          } else {
            decodedTxs = [];
            return;
          }
        }
      });

      const testCase = createTestCase(opcode, decodedTxs);

      if (testCase !== undefined) {
        testCases.push(testCase);
      }
    });

    return testCases;
  } catch (err) {
    console.error(err);
  }
}

createTestCase = function (opcode, txs) {
  if (txs === undefined || txs.length == 0) {
    return;
  }

  // console.log("\n ***** \n");
  // console.log('OPCODE: ' + JSON.stringify(opcode));
  // console.log('Decoded txs array: ' + JSON.stringify(txs));

  switch (opcode) {
    case 'RETURN':
      return createTest(opcodes.RETURN, txs);
    case 'REVERT':
      return createTest(opcodes.REVERT, txs);
    case 'STOP':
      return createTest(opcodes.STOP, txs);
    default:
      throw new Error('Unknown opcode');
  }
}

createTest = function (opcode, txs) {
  let testCase = [];

  const testCaseHeader = getTestCaseHeader(opcode);
  testCase.push(testCaseHeader);

  txs.forEach(function (tx, index, array) {
    const functionName = tx.name;

    let paramsArray = [];
    tx.params.forEach(function (param) {
      paramsArray.push(param.value);
    });

    const params = paramsArray.join(", ");

    if (index === array.length - 1) {
      const assertTemplate = getTestCaseAssert(opcode, functionName, params);
      testCase.push(assertTemplate);
    } else {
      const functionInvokeTemplate = templates.FUNCTION_INVOKE({
        function: functionName,
        params: params
      });

      testCase.push(functionInvokeTemplate);
    }
  });

  const testCaseBottom = templates.TEST_CASE_BOTTOM();

  testCase.push(testCaseBottom);

  const finalTestCase = testCase.join("\n");

  return finalTestCase;
}

getTestCaseHeader = function (opcode) {
  const contractName = "Example";
  let testTitle;

  switch (opcode) {
    case opcodes.RETURN:
      testTitle = `test${testCaseCounter}: should return`;
      break;
    case opcodes.REVERT:
      testTitle = `test${testCaseCounter}: should revert`;
      break;
    case opcodes.STOP:
      testTitle = `test${testCaseCounter}: should pass`;
      break;
    default:
      throw new Error('Unknown opcode');
  }

  testCaseCounter++;

  return templates.TEST_CASE_HEADER({
    testTitle: testTitle,
    contractName: contractName
  });
}

getTestCaseAssert = function (opcode, functionName, params) {
  switch (opcode) {
    case opcodes.RETURN:
      return templates.FUNCTION_PASSES({
        function: functionName,
        params: params
      });
    case opcodes.REVERT:
      return templates.REVERT_ASSERT({
        function: functionName,
        params: params
      });
    case opcodes.STOP:
      return templates.FUNCTION_PASSES({
        function: functionName,
        params: params
      });
    default:
      throw new Error('Unknown opcode');
  }
}

module.exports = {
  generate
}