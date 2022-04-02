pragma solidity >=0.7.0 <0.9.0;

import "./PatientPort.sol";

contract PrimaryCare {
//The owner of this contract will be the adminstration that oversees the "Integrated Delivery Network"    

address public owner;
string public name;
address patientRecord;

mapping(address => Patient) patients;
struct Patient{
    string name;
    address patient;
    address patientContract;
    
}

constructor(string memory _name) public {
    owner = msg.sender;
    _name = name;
    
}

function addPatient(address patient, address patientContract, string memory name) public {
    
Patient memory patientToAdd = Patient(name, patient, patientContract);

patients[patient] = patientToAdd;
   
   
   
   }

   function sendRecordRequest(address patient, address from, address fromContract, string memory fromName) public{
PatientPort pp = PatientPort(patients[patient].patientContract);

pp.addRequest(from, fromName, owner, name, address(0x58B57bd5E00a9fA04F3a474FE234496fd243dFB9), true  );
   }

   function getContractAddress() public returns(address){
return(patients[msg.sender].patientContract);
   }



}