

contract Example3 {

  uint public a = 0;

  function example() public {
    require(a == 2);
  }

  function one() public {
    require(a == 0);
    a = 1;
  }

  function two() public {
    require(a == 1);
    a = 2;
  }

}
