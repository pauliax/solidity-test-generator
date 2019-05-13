const truffleAssert = require('truffle-assertions');
const TimeLock = artifacts.require("TimeLock");

contract("TimeLock test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test7: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should revert", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test9: should return", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test10: should pass", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.passes(
      instance.deposit({
        value: 0x0
      })
    );
  });

  it("test11: should pass", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.passes(
      instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await TimeLock.deployed();
    await truffleAssert.passes(
      instance.lockTime(0x6363636363636363636363636363636363636363, {
        value: 0x0
      })
    );
  });

  it("test13: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test14: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test15: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test16: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test17: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test18: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test19: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test20: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test21: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test22: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x1
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test23: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test24: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseLockTime(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test25: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test26: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.lockTime(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test27: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test28: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test29: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x1
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test30: should return", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test31: should return", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test32: should pass", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.deposit({
        value: 0x0
      })
    );
  });

  it("test33: should pass", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
        value: 0x0
      })
    );
  });

  it("test34: should pass", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.deposit({
        value: 0x0
      })
    );
  });

  it("test35: should pass", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
        value: 0x0
      })
    );
  });

  it("test36: should return", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x0
    });
    await truffleAssert.passes(
      instance.lockTime(0x6363636363636363636363636363636363636363, {
        value: 0x0
      })
    );
  });

  it("test37: should return", async () => {
    let instance = await TimeLock.deployed();
    await instance.increaseLockTime(1.03531750376894480614016410125415070551159045112808033729397369230604680619236e+77, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.lockTime(0x6363636363636363636363636363636363636363, {
        value: 0x0
      })
    );
  });

  it("test38: should pass", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x1
    });
    await truffleAssert.passes(
      instance.withdraw({
        value: 0x0
      })
    );
  });

  it("test39: should revert", async () => {
    let instance = await TimeLock.deployed();
    await instance.deposit({
      value: 0x1
    });
    await truffleAssert.fails(
      instance.withdraw({
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });
});