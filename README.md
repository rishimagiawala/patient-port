# ![patientport logo](https://i.imgur.com/qWsX4Yw.png)

```shell
# repository structure
├── apps
│   ├── client
│   └── smart-contracts
├── packages
│   └── eslint-config-custom
├── .github
├── .eslintrc.js
├── gitignore
├── package.json
├── README.md
├── turbo.json
└── yarn.lock
```

## 💡 Inspiration

As healthcare is continuing to be more interconnected and advanced, patients and healthcare resources will always have to worry about data breaches and the misuses of private information. While healthcare facilities move their databases to third-party providers (Amazon, Google, Microsoft), patients become further distanced from accessing their own medical record history, and the complete infrastructure of healthcare networks are significantly at risk and threatened by malicious actors. Even a single damaging attack on a centralized storage solution can end up revealing much sensitive and revealing data.

To combat this risk, we created Patientport as a decentralized and secure solution for patients to easily view the requests for their medical records and take action on them.

## 💻 What it does

Patientport is a decentralized, secure, and open medical record solution. It is built on the Ethereum blockchain and securely stores all of your medical record requests, responses, and exchanges through smart contracts. Your medical data is encrypted and stored on the blockchain.

By accessing the powerful web application online through [patientport.tech](https://www.patientport.tech/), the patient can gain access to all these features.

First, on the website, the patient authenticates to the blockchain via MetaMask, and provides the contract address that was provided to them from their primary care provider.

Once they complete these two steps, a user has the ability to view all requests made about their medical record by viewing their “patientport” smart contract that is stored on the blockchain.

For demo purposes, the instance of the Ethereum blockchain that the application connects to is hosted locally.

However, anyone can compile and deploy the smart contracts on the Ethereum mainnet and connect to our web app.

## ⚙️ How we built it

<table>
  <tr>
   <td><strong>Application</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
  </tr>
  <tr>
   <td>React, React Router, Chakra UI
   </td>
   <td>Front-end web application
   </td>
  </tr>
  <tr>
   <td>Ethers, Solidity, MetaMask
   </td>
   <td>Blockchain, Smart contracts
   </td>
  </tr>
  <tr>
   <td>Netlify
   </td>
   <td>Hosting
   </td>
  </tr>
  <tr>
   <td>Figma, undraw.co
   </td>
   <td>Design
   </td>
  </tr>
</table>

## 🧠 Challenges we ran into

- Implementation of blockchain and smart contracts was very difficult, especially since the web3.js API was incompatible with the latest version of react, so we had to switch to a new, unfamiliar library, ethers.
- We ran into many bugs and unfamiliar behavior when coding the smart contracts with Solidity due to our lack of experience with it.
- Despite our goals and aspirations for the project, we had to settle to build a viable product quickly within the timeframe.

## 🏅 Accomplishments that we're proud of

- Implementing a working and functioning prototype of our idea
- Designing and developing a minimalist and clean user interface through a new UI library and reusable components with a integrated design
- Working closely with Solidity and MetaMask to make an application that interfaces directly with the Ethereum blockchain
- Creating and deploying smart contracts that communicate with each other and store patient data securely

## 📖 What we learned

- How to work with the blockchain and smart contracts to make decentralized transactions that can accurately record and encrypt/decrypt transactions
- How to work together and collaborate with developers in a remote environment via Github
- How to use React to develop a fully-featured web application that users can access and interact with

## 🚀 What's next for patientport

- Implementing more features, data, and information into patientport via a more robust smart contract and blockchain connections
- Developing a solution for medical professionals to handle their patients’ data with patientport through a simplified interface of the blockchain wallet
