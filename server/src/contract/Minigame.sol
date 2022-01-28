// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Minigame {
    Player[] public arrPlayer;
    struct Player{
        string _ID;
        address _WALLET;
    }
    
    event SMpushData(address _wallet, string _id);
    
    function register(string memory _id) public{
        Player memory newPlayer = Player(_id, msg.sender);
        arrPlayer.push(newPlayer);
        emit SMpushData(msg.sender, _id);
    }
    
}