const truffleAssert = require('truffle-assertions');
const Voting = artifacts.require("Voting");

contract("Voting test", async accounts => {
  it("test1: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.voteFlag(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test2: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test3: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.candidateList(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test4: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.totalVotesFor(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test5: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.voteForCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test6: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.validCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test7: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.votesReceived(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test8: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.balances(0xe3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3, {
        value: 0x0
      })
    );
  });

  it("test9: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.voteFlag(0x2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d, {
        value: 0x0
      })
    );
  });

  it("test10: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.candidateList(0, {
        value: 0x0
      })
    );
  });

  it("test11: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.votesReceived(0x9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f, {
        value: 0x0
      })
    );
  });

  it("test12: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.validCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test13: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.totalVotesFor(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test14: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.validCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test15: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.totalVotesFor(0x4200000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test16: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.validCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test17: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.totalVotesFor(0x0840014020020804044010000000040001000800200000800810081020021001, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test18: should revert", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.fails(
      instance.voteForCandidate(0x0801204004808010200000020000000002000002200400400810040880040240, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test19: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.validCandidate(0x0840014020020804044010000000040001000800200000800810081020021001, {
        value: 0x0
      })
    );
  });

  it("test20: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.totalVotesFor(0x4300000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test21: should pass", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test22: should return", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.getCandidateList({
        value: 0x0
      })
    );
  });

  it("test23: should pass", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test24: should pass", async () => {
    let instance = await Voting.deployed();
    await truffleAssert.passes(
      instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test25: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteFlag(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test26: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteFlag(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test27: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteFlag(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test28: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test29: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test30: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.balances(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test31: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.candidateList(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test32: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.candidateList(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test33: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.candidateList(0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test34: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.totalVotesFor(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test35: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.totalVotesFor(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test36: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.totalVotesFor(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test37: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test38: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test39: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test40: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.validCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test41: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.validCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test42: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.validCandidate(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test43: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.votesReceived(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test44: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.votesReceived(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test45: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.votesReceived(0x0, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test46: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.candidateList(0, {
        value: 0x0
      })
    );
  });

  it("test47: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.candidateList(2, {
        value: 0x0
      })
    );
  });

  it("test48: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.candidateList(0, {
        value: 0x0
      })
    );
  });

  it("test49: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.votesReceived(0x419f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f, {
        value: 0x0
      })
    );
  });

  it("test50: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.votesReceived(0x429f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f, {
        value: 0x0
      })
    );
  });

  it("test51: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.votesReceived(0x4343434343434343434343434343434343434343434343434343434343434343, {
        value: 0x0
      })
    );
  });

  it("test52: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.validCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test53: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.validCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test54: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.validCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test55: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.totalVotesFor(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });

  it("test56: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test57: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test58: should revert", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4300000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.fails(
      instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      }),
      truffleAssert.ErrorType.REVERT
    );
  });

  it("test59: should return", async () => {
    let instance = await Voting.deployed();
    await instance.voteForCandidate(0x4100000000000000000000000000000000000000000000000000000000000000, {
      value: 0x0
    });
    await truffleAssert.passes(
      instance.validCandidate(0x4200000000000000000000000000000000000000000000000000000000000000, {
        value: 0x0
      })
    );
  });
});