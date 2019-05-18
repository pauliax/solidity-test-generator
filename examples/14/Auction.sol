

contract Auctionbutton { 
        
    address owner;
    uint256 current_price;
    string name;
    uint256 balance;

    event Receive(uint value);

    constructor() public{
        owner = msg.sender;
        current_price = 0.005 ether;
        name = "foo bar";
        balance = 0;
    }

    function cashout() public {
       require(msg.sender == owner);
       msg.sender.transfer(balance);
    }
    
    function cashout_custom(uint amount) public {
        require(msg.sender == owner);
        msg.sender.transfer(amount);
    }

    function getName() view public returns(string memory) {
        return name;
    }

    function getPrice() view public returns(uint256) {
        return current_price;
    }

    function bid(string memory _name) public payable {
        require(msg.value > current_price);

        balance = balance + msg.value;
        name = _name;
        current_price = msg.value;
    }

    function () external payable {
        emit Receive(msg.value);
    }
}