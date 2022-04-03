const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const PatientPortABI = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "address", name: "patientAddress", type: "address" },
      { internalType: "address", name: "primaryCare", type: "address" },
      { internalType: "address", name: "PCC", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "string", name: "toName", type: "string" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "string", name: "fromName", type: "string" },
      { internalType: "address", name: "toContract", type: "address" },
      { internalType: "bool", name: "verified", type: "bool" },
    ],
    name: "addRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "getRequest",
    outputs: [
      {
        components: [
          { internalType: "string", name: "fromName", type: "string" },
          { internalType: "string", name: "toName", type: "string" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "toContract", type: "address" },
          { internalType: "bool", name: "verified", type: "bool" },
        ],
        internalType: "struct PatientPort.Request",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getactiveRequestCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primaryCareContract",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primaryCareOrigin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
const PrimaryCareABI = [
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "patient", type: "address" },
      { internalType: "address", name: "patientContract", type: "address" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "addPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "patient", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "fromContract", type: "address" },
      { internalType: "string", name: "fromName", type: "string" },
    ],
    name: "sendRecordRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export let account;
let provider;
let signer;
export var testArray = [
  [
    "",
    "Mark Back Surgery",
    "0x5BCBcFe48474910e57b2De505ab8b81930D6Ad57",
    "0x0b0390456BBda6b88AF3e85d81b7a098b68ec5f5",
    "0x58B57bd5E00a9fA04F3a474FE234496fd243dFB9",
    true,
  ],
  [
    "",
    "yo mama",
    "0x5BCBcFe48474910e57b2De505ab8b81930D6Ad57",
    "0x0b0390456BBda6b88AF3e85d81b7a098b68ec5f5",
    "0x58B57bd5E00a9fA04F3a474FE234496fd243dFB9",
    true,
  ],
];
export var requestArray = [];
export let patientPortAddress;
export default async function initWallet() {
  provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  account = await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  signer = provider.getSigner();
}

export async function getPatientRequests(address) {
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

  console.log(await requestArray);
  return await requestArray;
}
