const truffleAssert = require('truffle-assertions');
const Example2 = artifacts.require("Example2");

contract("Example2 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example2.new();
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should pass", async () => {
    let instance = await Example2.new();
    await truffleAssert.passes(
      instance.increment({
        value: 0x0
      })
    );
  });

  it("test3: should return", async () => {
    let instance = await Example2.new();
    await truffleAssert.passes(
      instance.var1({
        value: 0x0
      })
    );
  });

  it("test4: should revert", async () => {
    let instance = await Example2.new();
    await truffleAssert.fails(
      instance.equals(5.8577174555348192978982968886748000443418933419088755925843248380473700876673e+76, 5.8577174555348192978982968886748000443418933419088755925843248380473700876673e+76, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Example2.new();
    await instance.increment({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should pass", async () => {
    let instance = await Example2.new();
    await instance.increment({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.increment({
        value: 0x0
      })
    );
  });

  it("test7: should return", async () => {
    let instance = await Example2.new();
    await instance.increment({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.var1({
        value: 0x0
      })
    );
  });

  it("test8: should return", async () => {
    let instance = await Example2.new();
    await instance.increment({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.equals(9.08173248920149910763035709429800969606562927096185605982422668327245742082e+74, 4.54086624460063530471017615933670859830880118789130975234528809644181323778e+74, {
        value: 0x0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await Example2.new();
    await instance.increment({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.equals(3.632668626426282200386253187825094723917557534646553092288240375863307272452e+75, 3.632668626426282200386253187825094723917557534646553092288240375863307272452e+75, {
        value: 0x0
      })
    );
  });
});