

contract Example2 {

  uint public var1 = 0;

  function equals(uint a, uint b) public returns(bool) {
    require(var1 > 0);
    
    if (a == b) {
      return true;
    }

    return false;
  }

  function increment() public {
    var1++;
  }

}
