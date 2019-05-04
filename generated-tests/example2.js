const truffleAssert = require('truffle-assertions');
const Example2 = artifacts.require("Example2");

contract("Example2 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example2.deployed();
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should pass", async () => {
    let instance = await Example2.deployed();
    await truffleAssert.passes(
      instance.increment({
        value: 0
      })
    );
  });

  it("test3: should return", async () => {
    let instance = await Example2.deployed();
    await truffleAssert.passes(
      instance.var1({
        value: 0
      })
    );
  });

  it("test4: should revert", async () => {
    let instance = await Example2.deployed();
    await truffleAssert.fails(
      instance.equals(5.8577174555348192978982968886748000443418933419088755925843248380473700876673e+76, 5.8577174555348192978982968886748000443418933419088755925843248380473700876673e+76, {
        value: 0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Example2.deployed();
    await instance.increment({
      value: 0
    });
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should pass", async () => {
    let instance = await Example2.deployed();
    await instance.increment({
      value: 0
    });
    await truffleAssert.passes(
      instance.increment({
        value: 0
      })
    );
  });

  it("test7: should return", async () => {
    let instance = await Example2.deployed();
    await instance.increment({
      value: 0
    });
    await truffleAssert.passes(
      instance.var1({
        value: 0
      })
    );
  });

  it("test8: should return", async () => {
    let instance = await Example2.deployed();
    await instance.increment({
      value: 0
    });
    await truffleAssert.passes(
      instance.equals(9.08173248920127022929968508404829006077760087337795336876653784250617757953e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await Example2.deployed();
    await instance.increment({
      value: 0
    });
    await truffleAssert.passes(
      instance.equals(4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0
      })
    );
  });
});