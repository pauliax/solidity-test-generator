const truffleAssert = require('truffle-assertions');
const Example5 = artifacts.require("Example5");

contract("Example5 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.fails(
      instance.money({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.fails(
      instance.addr({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.fails(
      instance.owner({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.fails(
      instance.balance({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.fails(
      instance.end({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should return", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.passes(
      instance.balance({
        value: 0x0
      })
    );
  });

  it("test7: should return", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.passes(
      instance.addr({
        value: 0x0
      })
    );
  });

  it("test8: should return", async () => {
    let instance = await Example5.deployed();
    await truffleAssert.passes(
      instance.owner({
        value: 0x0
      })
    );
  });
});