import React from "react";
import { Stack } from "@chakra-ui/react";
import TransferCard from "../components/TransferCard";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

const History = () => {
  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "History"]} />
      <Stack p={4} gap={3}></Stack>
    </Sidebar>
  );
};

export default History;
