const truffleAssert = require('truffle-assertions');
const Example4 = artifacts.require("Example4");

contract("Example4 test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.fails(
      instance.indexOf(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.fails(
      instance.append(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.fails(
      instance.replace(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should return", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.passes(
      instance.indexOf(4.5862749070466414657963409748539132130118699808743909678373396018820494484837e+76, {
        value: 0x0
      })
    );
  });

  it("test5: should pass", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.passes(
      instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
        value: 0x0
      })
    );
  });

  it("test6: should pass", async () => {
    let instance = await Example4.deployed();
    await truffleAssert.passes(
      instance.replace(3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, 3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, {
        value: 0x0
      })
    );
  });

  it("test7: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.indexOf(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.replace(3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, 3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.indexOf(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test9: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.append(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test10: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.replace(3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, 3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.append(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test11: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.replace(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test12: should revert", async () => {
    let instance = await Example4.deployed();
    await instance.replace(3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, 3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.replace(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test13: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
        value: 0x0
      })
    );
  });

  it("test14: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.replace(3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, 3.4510583458964826871338803375138356850386348370936011243132456410201560206412e+76, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.append(3.178606371220444580254889784552217078325058402586211561867463090413301597959e+75, {
        value: 0x0
      })
    );
  });

  it("test15: should return", async () => {
    let instance = await Example4.deployed();
    await instance.append(4.54086624460063511464984255113176893561551707567433874538706353964749750785e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.indexOf(4.54086624460063511464984255113176893561551707567433874538706353964749750785e+74, {
        value: 0x0
      })
    );
  });

  it("test16: should return", async () => {
    let instance = await Example4.deployed();
    await instance.replace(4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, 4.54086624460063511464984265891740492812737627579981871174081284819547849217e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.indexOf(4.54086624460063511464984265891740492812737627579981871174081284819547849217e+74, {
        value: 0x0
      })
    );
  });

  it("test17: should return", async () => {
    let instance = await Example4.deployed();
    await instance.append(9.08173248920127022929968510226019405931660391550256054636101453810598150272e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.indexOf(4.54086624460063511464984254937435914241783900164368809639090024170868179208e+74, {
        value: 0x0
      })
    );
  });

  it("test18: should return", async () => {
    let instance = await Example4.deployed();
    await instance.replace(9.08173248920127022929968509872062022378588115024631874819275168689514742274e+74, 9.08173248920127022929968509866330643408663005621019030783727674911767921672e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.indexOf(4.54086624460063511464984255115853004432461285606338362969937573887032230404e+74, {
        value: 0x0
      })
    );
  });

  it("test19: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.append(4.54086624460063511464984254936031011189294057512317217452199454802870075776e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.replace(4.54086624460063511464984254936031011189294057512317217452199454802870075776e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0x0
      })
    );
  });

  it("test20: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.replace(4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, 4.54086624460063511464984254941740001960117897036549081287525363375077851393e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.replace(4.54086624460063511464984254941740001960117897036549081287525363375077851393e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0x0
      })
    );
  });

  it("test21: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.append(9.08173248920127022929968509872062022378588115024631875967476477016657629186e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.replace(4.54086624460063511464984254936031011189294057512315937409854609248902807553e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0x0
      })
    );
  });

  it("test22: should pass", async () => {
    let instance = await Example4.deployed();
    await instance.replace(9.08173248920127022929968509872062022378588115024631874819275168689514742274e+74, 9.0817324892012702292996850987206202237858811502463187485833010319171839642e+74, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.replace(4.54086624460063511464984254936031011189294057512315937418788686853470421249e+74, 4.54086624460063511464984254936031011189294057512315937409637584344757371137e+74, {
        value: 0x0
      })
    );
  });
});