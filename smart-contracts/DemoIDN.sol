// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
 

contract DemoIDN {
//The owner of this contract will be the adminstration that oversees the "Integrated Delivery Network"    
address public owner;
string public name;

enum ResourceType {Hospital, Lab, Physician}
mapping(uint => Resource) public resources;
uint resourceCount = 0;
struct Resource{
    string resourceName;
    address resourcePK;
    address resourceContract;
    string resourceURL;
   
}
constructor(string memory _name) public {
    owner = msg.sender;
    name = _name;
}
 function addResource(string memory _name, address pk, address resourcecontract, string memory _url) public {
     require(msg.sender == owner, 'Access Denied');
     Resource memory resource = Resource(_name, pk, resourcecontract, _url);
     resources[resourceCount] = resource;
     resourceCount++; 
   }


function addResource(string memory _name, address pk, string memory _url) public{
     require(msg.sender == owner, 'Access Denied');
      Resource memory resource = Resource(_name, pk, address(0x0), _url);
     resources[resourceCount] = resource;
     resourceCount++; 
   }

function getResource(uint i) public view returns(Resource memory ){

return resources[i];

}
}