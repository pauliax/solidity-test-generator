const compile = require("string-template/compile");

const revertAssert = compile(`await truffleAssert.fails(
    instance.{function}({params}),
    truffleAssert.ErrorType.REVERT
  );`);

module.exports = {
    revertAssert
}