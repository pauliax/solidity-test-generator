// pragma solidity ^0.4.25;

contract SwapNumbers {
    
    function swap(uint x, uint y) public pure returns(uint, uint) {
        if (x > y) {
            x = x + y;
            y = x - y;
            x = x - y;
            assert(x <= y);
        }
        
        return (x, y);
    }
}