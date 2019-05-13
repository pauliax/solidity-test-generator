

contract Voting {
  /*
  The key of the mapping is candidate name stored as type bytes32 and value is
  an unsigned integer which used to store the vote count
  */
  mapping (bytes32 => uint256) public votesReceived;

  mapping (address => bool) public voteFlag;

  mapping (address => uint256) public balances;

  bytes32[] public candidateList;

  constructor()
    public
  {
    candidateList.push("A");
    candidateList.push("B");
    candidateList.push("C");
  }

  function totalVotesFor(
    bytes32 candidate
    )
    public
    view
    returns (uint256)
  {
    require(validCandidate(candidate));

    return votesReceived[candidate];
  }

  function voteForCandidate(
    bytes32 candidate
    )
    public
  {
    require(validCandidate(candidate));
    require(voteFlag[msg.sender] != true);

    uint256 balance = balances[msg.sender];
    votesReceived[candidate] += balance;
    voteFlag[msg.sender] = true;
  }

  function validCandidate(
    bytes32 candidate
    )
    public
    view
    returns (bool)
  {
    for (uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }

    return false;
  }

  // This function returns the list of candidates.
  function getCandidateList()
    public
    view
    returns (bytes32[] memory)
  {
    return candidateList;
  }
  
}
