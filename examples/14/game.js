const truffleAssert = require('truffle-assertions');
const Game = artifacts.require("Game");

contract("Game test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.endRegisterTime({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registerDuration({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.numPlayers({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test7: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.gameNumber({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.endRegisterTime({
        value: 0x0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.registerDuration({
        value: 0x0
      })
    );
  });

  it("test10: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test11: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.numPlayers({
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.gameNumber({
        value: 0x0
      })
    );
  });

  it("test13: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.registered(4.994952869060698626114826804296341123082234632635475311506013427792331082507e+76, 0x6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e, {
        value: 0x0
      })
    );
  });

  it("test14: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.players(5.8123087930888129467517984631811969432229639361576439988433610796128943505536e+76, 5.8123087930888129467517984631811969432229639361576439988433610796128943505536e+76, {
        value: 0x0
      })
    );
  });

  it("test15: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.endRegisterTime({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test16: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.endRegisterTime({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test17: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registerDuration({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test18: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registerDuration({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test19: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test20: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test21: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.numPlayers({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test22: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.numPlayers({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test23: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test24: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test25: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test26: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.registered(0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test27: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.gameNumber({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test28: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.gameNumber({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test29: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.endRegisterTime({
        value: 0x0
      })
    );
  });

  it("test30: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.endRegisterTime({
        value: 0x0
      })
    );
  });

  it("test31: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.registerDuration({
        value: 0x0
      })
    );
  });

  it("test32: should return", async () => {
    let instance = await Game.deployed();
    await truffleAssert.passes(
      instance.registerDuration({
        value: 0x0
      })
    );
  });

  it("test33: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test34: should revert", async () => {
    let instance = await Game.deployed();
    await truffleAssert.fails(
      instance.players(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });
});