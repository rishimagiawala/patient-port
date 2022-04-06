pragma solidity >=0.7.0 <0.9.0;
contract RecordInterface{
   
    address public owner;


mapping(address => string) recordsRecieved;
constructor() public{

 owner = msg.sender;

}

function sendRecord(address origin, string memory encryptedhash) public{
recordsRecieved[origin] = encryptedhash;
}

function getRecord(address patient) view public returns(string memory){
return(recordsRecieved[patient]);

}

}