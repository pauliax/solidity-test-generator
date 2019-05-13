const truffleAssert = require('truffle-assertions');
const Example3 = artifacts.require("Example3");

contract("Example3 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example3.deployed();
    await truffleAssert.fails(
      instance.example({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Example3.deployed();
    await truffleAssert.fails(
      instance.two({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should return", async () => {
    let instance = await Example3.deployed();
    await truffleAssert.passes(
      instance.a({
        value: 0x0
      })
    );
  });

  it("test4: should pass", async () => {
    let instance = await Example3.deployed();
    await truffleAssert.passes(
      instance.one({
        value: 0x0
      })
    );
  });

  it("test5: should revert", async () => {
    let instance = await Example3.deployed();
    await instance.one({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.example({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should return", async () => {
    let instance = await Example3.deployed();
    await instance.one({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.a({
        value: 0x0
      })
    );
  });

  it("test7: should revert", async () => {
    let instance = await Example3.deployed();
    await instance.one({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.one({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should pass", async () => {
    let instance = await Example3.deployed();
    await instance.one({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.two({
        value: 0x0
      })
    );
  });
});