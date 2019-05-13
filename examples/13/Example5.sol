

contract Example5 {
    address public addr = address(this);
    address public owner;
    uint public balance;

    constructor () payable public {
        owner = msg.sender;
    }

    function money () payable public {
        require(msg.value > 20 ether);
        balance = addr.balance;
    }

    function end () payable public {
        require(msg.sender == owner);
        selfdestruct(msg.sender);
    }
}