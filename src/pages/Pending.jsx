import React from "react";
import { Stack, Wrap } from "@chakra-ui/react";

import TransferCard from "../components/TransferCard";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

const Pending = () => {
  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Pending Requests"]} />
      <Stack p={4} gap={3}>
        <Wrap spacing={8}>
          <TransferCard />
          <TransferCard />
          <TransferCard />
          <TransferCard />
          <TransferCard />
          <TransferCard />
        </Wrap>
      </Stack>
    </Sidebar>
  );
};

export default Pending;
