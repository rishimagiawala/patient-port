import React, { useEffect } from "react";
import { Box, Input, Container } from "@chakra-ui/react";

import { account } from "../wallet";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    console.log(account);
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <Input placeholder="extra small size" size="xs" />
      </Container>
    </>
  );
};

export default Dashboard;
