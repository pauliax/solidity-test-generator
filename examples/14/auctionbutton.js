const truffleAssert = require('truffle-assertions');
const Auctionbutton = artifacts.require("Auctionbutton");

contract("Auctionbutton test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.getName({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.cashout({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.getPrice({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.cashout_custom(0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.cashout_custom(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.cashout({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test7: should return", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.passes(
      instance.getPrice({
        value: 0x0
      })
    );
  });

  it("test8: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.bid({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test9: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.cashout_custom(3.5872843332345017405733756139946449883954230543472959055361369163235832319823e+76, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test10: should revert", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.fails(
      instance.bid({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test11: should return", async () => {
    let instance = await Auctionbutton.new();
    await truffleAssert.passes(
      instance.getName({
        value: 0x0
      })
    );
  });
});