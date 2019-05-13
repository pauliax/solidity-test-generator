

contract ERC20 {

  mapping (address => uint256) public balances;

  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balances[msg.sender] >= _value);
    
    if (msg.sender != _to) {
      balances[msg.sender] -= _value;
      balances[_to] += _value;
    }

    return true;
  }

}
