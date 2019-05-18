const truffleAssert = require('truffle-assertions');
const ERC20 = artifacts.require("ERC20");

contract("ERC20 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await ERC20.new();
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await ERC20.new();
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should return", async () => {
    let instance = await ERC20.new();
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test4: should revert", async () => {
    let instance = await ERC20.new();
    await truffleAssert.fails(
      instance.transfer(0x0101010101010101010101010101010101010101, 1.131665600602079410950672689132424881539115900270872430407619059293840539905e+75, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should return", async () => {
    let instance = await ERC20.new();
    await truffleAssert.passes(
      instance.transfer(0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef, 0, {
        value: 0x0
      })
    );
  });

  it("test6: should return", async () => {
    let instance = await ERC20.new();
    await truffleAssert.passes(
      instance.transfer(0x0101010101010101010101010101010101010101, 0, {
        value: 0x0
      })
    );
  });

  it("test7: should revert", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0000000101010101010101010100010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should revert", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0101010101010101010101010101010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test9: should return", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0101010101010101010101010101010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test10: should revert", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0101010101010101010101080101010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x8080808080808080808080808080808080808080, 5.8123087930888129467517984631811969432229639361576439988433610796127324734465e+76, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test11: should return", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0101010101010101010101010101010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.transfer(0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef, 0, {
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await ERC20.new();
    await instance.transfer(0x0101010101010101010101010101010101010101, 0, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.transfer(0x2080104004008020084001402010402010800280, 0, {
        value: 0x0
      })
    );
  });
});