const truffleAssert = require('truffle-assertions');
const Pausable = artifacts.require("Pausable");

contract("Pausable test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Pausable.deployed();
    await truffleAssert.fails(
      instance.unpause({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Pausable.deployed();
    await truffleAssert.fails(
      instance.pause({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should return", async () => {
    let instance = await Pausable.deployed();
    await truffleAssert.passes(
      instance.paused({
        value: 0x0
      })
    );
  });
});