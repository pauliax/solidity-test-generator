// pragma solidity ^0.4.25;


contract Example4 {
    uint[] data;

    function append(uint value) public {
        data.push(value);
    }

    function replace(uint _old, uint _new) public {
        uint index = indexOf(_old);
        if (index == uint(-1))
            data.push(_new);
        else
            data[index] = _new;
    }
    
    function indexOf(uint value)
        public
        view
        returns (uint)
    {
        for (uint i = 0; i < data.length; i++)
            if (data[i] == value) return i;
        return uint(-1);
    }
}