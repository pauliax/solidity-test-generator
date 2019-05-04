const compile = require("string-template/compile");

const TEST_CASE_HEADER = compile(`  it("{testTitle}", async () => {
    let instance = await {contractName}.deployed();`);

const REVERT_ASSERT = compile(`    await truffleAssert.fails(
      instance.{function}({params}{
        value: {value}
      }),
      truffleAssert.ErrorType.REVERT
    );`);

const TEST_CASE_BOTTOM = compile(`  });`);

const FUNCTION_INVOKE = compile(`    await instance.{function}({params}{
      value: {value}
    });`);

const FUNCTION_PASSES = compile(`    await truffleAssert.passes(
      instance.{function}({params}{ 
        value: {value}
      })
    );`);

const TEST_FILE_HEADER = compile(`const truffleAssert = require('truffle-assertions');
const {contractName} = artifacts.require("{contractName}");

contract("{contractName} test", async accounts => {`);

const TEST_FILE_BOTTOM = compile(`});`);

module.exports = {
  TEST_CASE_HEADER,
  REVERT_ASSERT,
  TEST_CASE_BOTTOM,
  FUNCTION_INVOKE,
  FUNCTION_PASSES,
  TEST_FILE_HEADER,
  TEST_FILE_BOTTOM
}