import React, { useEffect, useState } from "react";

import {
  Stack,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";

//import { account } from "../wallet";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Breadcrumbs from "../components/Breadcrumbs";
import { getPatientRequests } from "../wallet";
import { ethers } from "ethers";
const Dashboard = () => {
  const [pcpContract, setPcpContract] = useState(null);
  const [account, setAccount] = useState()
  const toast = useToast();

  async function addressTitle(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider.send("eth_requestAccounts", []);
  }

  useEffect(() => {
    

    const fetchAddress = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const data = provider.send("eth_requestAccounts", []);
      return await data
    }
  
    // call the function
    fetchAddress().then((result)=>{
      setAccount(result)
    })
      // make sure to catch any error
      





    // MetaMask requires requesting permission to connect users accounts
   
    console.log(account);
    console.log(pcpContract);
  }, [pcpContract]);

  const abbreviateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };

  return (
    <>
      <Sidebar>
        <Breadcrumbs links={["Home", "Dashboard"]} />
        <Stack p={4} gap={3}>
          <Card>
            <Stack gap={3}>
              <Heading>Welcome to Your Patient Dashboard.</Heading>
              <Text>
                Your wallet address is{" "}
                {account ? (
                  <abbr title={account[0]}>
                    {abbreviateAddress(account[0])}
                  </abbr>
                ) : (
                  "Patient"
                )}
              </Text>
            </Stack>
          </Card>
          <Card>
            <FormControl>
              <FormLabel>Input Your patientport Contract Address</FormLabel>
              <Input
                placeholder="Contract Address"
                maxW="lg"
                onChange={(e) => {
                  setPcpContract(e.target.value);
                }}
              />
            </FormControl>
            <Button
              onClick={() => {
                getPatientRequests(pcpContract).then((res) => {
                  console.log(res);
                  toast({
                    title: "Contract Address successfully added",
                    description: "You can now view your patient requests",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                });
              }}
              colorScheme="blue"
              mt={4}
            >
              Submit
            </Button>
          </Card>
        </Stack>
      </Sidebar>
    </>
  );
};

export default Dashboard;
