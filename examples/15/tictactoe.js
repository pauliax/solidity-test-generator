const truffleAssert = require('truffle-assertions');
const TicTacToe = artifacts.require("TicTacToe");

contract("TicTacToe test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.fails(
      instance.doMove(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should pass", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.joinGame({
        value: 0x0
      })
    );
  });

  it("test3: should return", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.checkWinner({
        value: 0x0
      })
    );
  });

  it("test4: should return", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.doMove(7.9465159280511114506372244613805426958126460064655289046686577260332539948975e+76, {
        value: 0x0
      })
    );
  });

  it("test5: should return", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.checkWinner({
        value: 0x0
      })
    );
  });

  it("test6: should return", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.doMove(7.9465159280511114506372244613805426958126460064655289046686577260332539948975e+76, {
        value: 0x0
      })
    );
  });

  it("test7: should return", async () => {
    let instance = await TicTacToe.new();
    await truffleAssert.passes(
      instance.current({
        value: 0x0
      })
    );
  });

  it("test8: should revert", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.doMove(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test9: should pass", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.joinGame({
        value: 0x0
      })
    );
  });

  it("test10: should return", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.checkWinner({
        value: 0x0
      })
    );
  });

  it("test11: should return", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.doMove(7.9465159280511114506372244613805426958126460064655289046686577260332539948975e+76, {
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.checkWinner({
        value: 0x0
      })
    );
  });

  it("test13: should return", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.doMove(7.9465159280511114506372244613805426958126460064655289046686577260332539948975e+76, {
        value: 0x0
      })
    );
  });

  it("test14: should return", async () => {
    let instance = await TicTacToe.new();
    await instance.joinGame({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.current({
        value: 0x0
      })
    );
  });
});