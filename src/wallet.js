import { PatientPortABI } from "./sc_abi/abi";
const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page

export var requestArray = [];

export var testArray = [
  [
    "0x0b0390456BBda6b88AF3e85d81b7a098b68ec5f5",
    "Gupta Pediatrics",
    "Primary Care Provider",
    "gupta.pediatrics@patientport.tech",
    "0x31e48Ec9059978Bcbf61E79EC71b4ca66C78CF26",
    "Michael Smith, M.D",
    "Cardiology",
    "micheal.smith@patientport.tech",
    "0x31e48Ec9059978Bcbf61E79EC71b4ca66C78CF26",
    true,
  ],
  [
    "0x0b0390456BBda6b88AF3e85d81b7a098b68ec5f5",
    "Gupta Pediatrics",
    "Primary Care Provider",
    "gupta.pediatrics@patientport.tech",
    "0x72c15BC5389df6c3208D888597b28b98B3A9aec7",
    "Michael Scott, Manager",
    "Dunder Mifflin Sales",
    "micheal.scott@patientport.tech",
    "0x72c15BC5389df6c3208D888597b28b98B3A9aec7",
    true,
  ],
  [
    "0x0b0390456BBda6b88AF3e85d81b7a098b68ec5f5",
    "Gupta Pediatrics",
    "Primary Care Provider",
    "gupta.pediatrics@patientport.tech",
    "0x932E9EfC7e141b90dD762231E5F3632700eC1E81",
    "Stephen Strange, M.D",
    "Neuroscience Surgery",
    "drstrange@patientport.tech",
    "0x932E9EfC7e141b90dD762231E5F3632700eC1E81",
    true,
  ],
];

export let ppcontract;
export let patientPortAddress;
export let account;
export default async function initWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  account = await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
}

export async function getPatientRequests(address) {
    requestArray = [];
ppcontract = address;
  var requestCount;

  const getPatientContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, PatientPortABI, signer);
    return contract;
  };

  var contract = getPatientContract();

  requestCount = contract.getactiveRequestCount().then((res) => {
    // console.log(new BigNumber(res._hex).toNumber())
    return new BigNumber(res._hex).toNumber();
  });
  for (var i = 0; i < (await requestCount); i++) {
    contract.getRequest(i).then((res) => {
      // console.log(res)
      requestArray.push(res);
    });
  }

  return await requestArray;
  console.log(await requestArray)
}

export function updateRequestActive(index){
   console.log(index);

    const getPatientContract = () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ppcontract, PatientPortABI, signer);
      return contract;
    };
  
    var contract = getPatientContract()

    contract.updateActive(index).then(()=>{

    getPatientRequests(ppcontract)

    })
  
   
  
   

}