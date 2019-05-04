

contract Example1 {

  function equals(uint a, uint b) public returns(bool) {
    require(a > 1 && b > 1);
    
    if (a == b) {
      return true;
    }

    return false;
  }

}
