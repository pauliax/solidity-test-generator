const truffleAssert = require('truffle-assertions');
const Token = artifacts.require("Token");

contract("Token test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test7: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.decreaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.totalSupply({
        value: 0x0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.balanceOf(0x3131313131313131313131313131313131313131, {
        value: 0x0
      })
    );
  });

  it("test10: should revert", async () => {
    let instance = await Token.new();
    await truffleAssert.fails(
      instance.transferFrom(0x0101010101010101010101010101010101010101, 0x0101010101010101010101010101010101010101, 2.8949796085363427145963331260826192220668179634296369775620936547584132055297e+76, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test11: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.allowance(0x3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e, 0x3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e, {
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
        value: 0x0
      })
    );
  });

  it("test13: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.decreaseApproval(0x0101010101010101010101010101010101010101, 5.66274929153249944718580834368645693556157673760010645555464718132495581441e+74, {
        value: 0x0
      })
    );
  });

  it("test14: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.transfer(0x0000000000000000000000000000000000000000, 0, {
        value: 0x0
      })
    );
  });

  it("test15: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
        value: 0x0
      })
    );
  });

  it("test16: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
        value: 0x0
      })
    );
  });

  it("test17: should return", async () => {
    let instance = await Token.new();
    await truffleAssert.passes(
      instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
        value: 0x0
      })
    );
  });

  it("test18: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test19: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test20: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test21: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test22: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test23: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balanceOf(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test24: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test25: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test26: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test27: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test28: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test29: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.approve(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test30: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test31: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test32: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test33: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test34: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test35: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transfer(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test36: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test37: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test38: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test39: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test40: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test41: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.increaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test42: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test43: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test44: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test45: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test46: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test47: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.transferFrom(0x0, 0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test48: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test49: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test50: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test51: should revert", async () => {
    let instance = await Token.new();
    await instance.increaseApproval(0x2323232323232323232323232323232323232323, 1.5893031856102222901274448922761085391625292012931057809337315452066507989795e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test52: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test53: should revert", async () => {
    let instance = await Token.new();
    await instance.transferFrom(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.allowance(0x0, 0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test54: should revert", async () => {
    let instance = await Token.new();
    await instance.approve(0xb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3, 8.1281505778351368552232181633549551002883636294704552796325127597711569433523e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.decreaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test55: should revert", async () => {
    let instance = await Token.new();
    await instance.decreaseApproval(0x0101010101010101010101010101010101010101, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.decreaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test56: should revert", async () => {
    let instance = await Token.new();
    await instance.transfer(0x0000000000000000000000000000000000000000, 0, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.decreaseApproval(0x0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });
});