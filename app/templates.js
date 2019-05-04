const compile = require("string-template/compile");

const TEST_CASE_HEADER = compile(`it("{testTitle}", async () => {
  let instance = await {contractName}.deployed();`);

const REVERT_ASSERT = compile(`  await truffleAssert.fails(
    instance.{function}({params}),
    truffleAssert.ErrorType.REVERT
  );`);

const TEST_CASE_BOTTOM = compile(`});`);

const FUNCTION_INVOKE = compile(`  await instance.{function}({params});`);

const FUNCTION_PASSES = compile(`  await truffleAssert.passes(
    instance.{function}({params})
  );`);

module.exports = {
  TEST_CASE_HEADER,
  REVERT_ASSERT,
  TEST_CASE_BOTTOM,
  FUNCTION_INVOKE,
  FUNCTION_PASSES
}