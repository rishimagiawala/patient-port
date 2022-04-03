const { ethers } = require("ethers");
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page

export let account;

export default async function initWallet() {
  let provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  account = await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
}
