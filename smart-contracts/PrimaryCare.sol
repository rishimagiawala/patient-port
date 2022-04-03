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
   name = _name;
    
}

function addPatient(address patient, address patientContract, string memory name) public {
    
Patient memory patientToAdd = Patient(name, patient, patientContract);

patients[patient] = patientToAdd;
   
   
   
   }

   function sendRecordRequest(address patient, address to, string memory toName,string memory toSpecial, string memory toEmail, address toContract ) public{
PatientPort pp = PatientPort(patients[patient].patientContract);

pp.addRequest(owner, name, 'Primary Care Provider', 'gupta.pediatrics@patientport.tech',to, toName, toSpecial, toEmail, toContract  );
   }

   function getContractAddress() public returns(address){
return(patients[msg.sender].patientContract);
   }



}