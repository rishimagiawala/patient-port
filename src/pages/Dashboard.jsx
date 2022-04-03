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

import { account } from "../wallet";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Breadcrumbs from "../components/Breadcrumbs";
import { getPatientRequests } from "../wallet";

const Dashboard = () => {
  const [pcpContract, setPcpContract] = useState(null);
  const toast = useToast();

  useEffect(() => {
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
              <Heading>Welcome to your Patient Portal.</Heading>
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
              <FormLabel>Input Your Patient Portal Contract Address</FormLabel>
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
