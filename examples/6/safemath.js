const truffleAssert = require('truffle-assertions');
const SafeMath = artifacts.require("SafeMath");

contract("SafeMath test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.fails(
      instance.add(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.fails(
      instance.div(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.fails(
      instance.sub(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.fails(
      instance.mul(0, 0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should return", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.passes(
      instance.add(2.966283919804993527034387130048402414982902112523640780481827770423269955208e+76, 2.9152138869393869683948681064221188236606110035568844984032521705896525578268e+76, {
        value: 0x0
      })
    );
  });

  it("test6: should return", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.passes(
      instance.div(5.8123087930888129467517984631811969432229639361576439988433610796128943505536e+76, 5.7903995646260820596116373162187883821579390067482801134480956320203611309088e+76, {
        value: 0x0
      })
    );
  });

  it("test7: should return", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.passes(
      instance.sub(5.8009564758486634910975178371553058419394599454464418086600147146810100547592e+76, 7.350527442623717397989372322514493759173982825622492258395226433708353421321e+75, {
        value: 0x0
      })
    );
  });

  it("test8: should return", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.passes(
      instance.mul(0, 0, {
        value: 0x0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await SafeMath.deployed();
    await truffleAssert.passes(
      instance.mul(5.316212300723401441541943045055307696902958255069794e+51, 1.213175949453672267019674e+25, {
        value: 0x0
      })
    );
  });
});