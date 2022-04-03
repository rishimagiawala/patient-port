import React, { useEffect } from "react";
import {
  Stack,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { account } from "../wallet";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    console.log(account);
  }, []);

  const abbreviateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };

  return (
    <>
      <Sidebar>
        <Box pl={4}>
          <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="/dashboard">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
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
              <FormLabel>Input your Wallet Hash</FormLabel>
              <Input placeholder="Wallet Hash" maxW="lg" />
            </FormControl>
          </Card>
        </Stack>
      </Sidebar>
    </>
  );
};

export default Dashboard;
