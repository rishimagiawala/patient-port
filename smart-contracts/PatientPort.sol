pragma solidity >=0.7.0 <0.9.0;
 

contract PatientPort {
//The owner of this contract will be the adminstration that oversees the "Integrated Delivery Network"    
address public owner;
address public primaryCareOrigin;
address public primaryCareContract;
string public name;
uint activeRequestCount = 0;
mapping(uint => Request) activeRequestsByInt;
mapping(address => Request) activeRequests;
struct Request{
    string fromName;
    string toName;
    address to;
    address from;
    address toContract;
    bool verified;
}

constructor(string memory _name, address patientAddress, address primaryCare, address PCC) public {
    owner = patientAddress;
    name = _name;
    primaryCareOrigin = msg.sender;
    primaryCareContract = PCC;
}

function addRequest(address to, string memory toName, address from, string memory fromName, address toContract, bool verified) public  {
    
   require(msg.sender == primaryCareContract, 'Only Primary Care Origin can add requests to Patient Port');

   Request memory request = Request(fromName, toName, to, from, toContract, verified);
     activeRequestsByInt[activeRequestCount] = request;
     activeRequestCount++;
   
   
   }

function getactiveRequestCount() public view returns(uint){
   require(msg.sender == owner, 'Only Patient-Owner of the contract has access');
    return(activeRequestCount);


}

function getRequest(uint index) public view returns(Request memory){
    require(msg.sender == owner, 'Only Patient-Owner of the contract has access');
    return activeRequestsByInt[index];
}

}