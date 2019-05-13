const truffleAssert = require('truffle-assertions');
const SwapNumbers = artifacts.require("SwapNumbers");

contract("SwapNumbers test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await SwapNumbers.deployed();
    await truffleAssert.fails(
      instance.swap(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should return", async () => {
    let instance = await SwapNumbers.deployed();
    await truffleAssert.passes(
      instance.swap(9.08187025347561657767934159246960132544511771328525251388177214782394401281e+74, 5.7896044618658097711785492504343953926634992332820282019728792003956564819968e+76, {
        value: 0x0
      })
    );
  });

  it("test3: should return", async () => {
    let instance = await SwapNumbers.deployed();
    await truffleAssert.passes(
      instance.swap(7.2384201295329995481723167043691884300531615463472903444059293502585534676992e+76, 2.9402552199972688337231053207902937799987570718522386111445058576452673339393e+76, {
        value: 0x0
      })
    );
  });
});