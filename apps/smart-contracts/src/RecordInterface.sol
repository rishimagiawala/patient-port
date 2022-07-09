// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract RecordInterface {
    address public owner;

    mapping(address => string) public recordsRecieved;

    constructor() {
        owner = msg.sender;
    }

    function sendRecord(address origin, string memory encryptedhash) public {
        recordsRecieved[origin] = encryptedhash;
    }

    function getRecord(address patient) public view returns (string memory) {
        return (recordsRecieved[patient]);
    }
}
