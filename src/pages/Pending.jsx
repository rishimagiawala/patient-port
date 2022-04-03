import React, { useState, useEffect } from "react";
import { Stack, Wrap } from "@chakra-ui/react";

import { requestArray } from "../wallet";
import TransferCard from "../components/TransferCard";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

const Pending = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(requestArray);
  }, []);

  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Pending Requests"]} />
      <Stack p={4} gap={3}>
        <Wrap spacing={8}>
          {transactions.map((transaction) => (
            <TransferCard
              key={transaction.id + transaction.from}
              requester={transaction[1]}
              requesterAddress={transaction[2]}
              pcpAddress={transaction[3]}
              email={transaction[4]}
            />
          ))}
        </Wrap>
      </Stack>
    </Sidebar>
  );
};

export default Pending;
