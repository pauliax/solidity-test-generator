const compile = require("string-template/compile");

const REVERT_ASSERT = compile(`await truffleAssert.fails(
    instance.{function}({params}),
    truffleAssert.ErrorType.REVERT
  );`);

module.exports = {
    REVERT_ASSERT
}