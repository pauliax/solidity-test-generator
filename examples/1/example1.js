const truffleAssert = require('truffle-assertions');
const Example1 = artifacts.require("Example1");

contract("Example1 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example1.deployed();
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Example1.deployed();
    await truffleAssert.fails(
      instance.equals(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Example1.deployed();
    await truffleAssert.fails(
      instance.equals(4.54086624460063511464984255661095792850920809857212485495899319003586232832e+74, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should return", async () => {
    let instance = await Example1.deployed();
    await truffleAssert.passes(
      instance.equals(9.61179038197006611878774992411050831398047471522286229870405690762308157698e+74, 2.03543629175105485082576761256345281141796567953150608214227681018222164384e+75, { 
        value: 0x0
      })
    );
  });

  it("test5: should return", async () => {
    let instance = await Example1.deployed();
    await truffleAssert.passes(
      instance.equals(4.54086624460063511464984254936031011189294057512315937409637584344757371138e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371138e+74, { 
        value: 0x0
      })
    );
  });
});