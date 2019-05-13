const truffleAssert = require('truffle-assertions');
const Ownable = artifacts.require("Ownable");

contract("Ownable test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Ownable.deployed();
    await truffleAssert.fails(
      instance.transferOwnership(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should return", async () => {
    let instance = await Ownable.deployed();
    await truffleAssert.passes(
      instance.owner({ 
        value: 0x0
      })
    );
  });

  it("test3: should revert", async () => {
    let instance = await Ownable.deployed();
    await truffleAssert.fails(
      instance.transferOwnership(0x8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b8b, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });
});