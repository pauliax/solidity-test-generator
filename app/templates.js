const compile = require("string-template/compile");

const REVERT_HEADER = compile(`it("{testTitle}", async () => {
  let instance = await {contractName}.deployed();`);

const REVERT_ASSERT = compile(`  await truffleAssert.fails(
    instance.{function}({params}),
    truffleAssert.ErrorType.REVERT
  );`);

const TEST_CASE_BOTTOM = compile(`});`);

const FUNCTION_INVOKE = compile(`  await instance.{function}({params});`);

module.exports = {
  REVERT_HEADER,
  REVERT_ASSERT,
  TEST_CASE_BOTTOM,
  FUNCTION_INVOKE
}