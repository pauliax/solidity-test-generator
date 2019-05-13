// pragma solidity ^0.4.10;

contract Game {
    
    uint public registerDuration;
    uint public endRegisterTime;
    uint public gameNumber;
    uint public numPlayers;
    mapping(uint => mapping(uint => address)) public players;
    mapping(uint => mapping(address => bool)) public registered;
    event StartedGame(address initiator, uint regTimeEnd, uint amountSent, uint gameNumber);
    event RegisteredPlayer(address player, uint gameNumber);
    event FoundWinner(address player, uint gameNumber);
    
    constructor() public {
        registerDuration = 600;
    }
    
    function() payable external {
        if (endRegisterTime == 0) {
            endRegisterTime = now + registerDuration;
            require(msg.value != 0);
            emit StartedGame(msg.sender, endRegisterTime, msg.value, gameNumber);
        } else if (now > endRegisterTime && numPlayers > 0) {
            uint winner = (uint256(keccak256(abi.encodePacked(now))) % 251) % numPlayers;
            uint currentGamenumber = gameNumber;
            emit FoundWinner(players[currentGamenumber][winner], currentGamenumber);
            endRegisterTime = 0;
            numPlayers = 0;
            gameNumber++;
            // players[currentGamenumber][winner].send(this.balance);
        } else {
            require(!registered[gameNumber][msg.sender]);
            registered[gameNumber][msg.sender] = true;
            players[gameNumber][numPlayers] = (msg.sender);
            numPlayers++;
            emit RegisteredPlayer(msg.sender, gameNumber);
        }
    }
}