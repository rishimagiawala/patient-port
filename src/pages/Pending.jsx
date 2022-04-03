/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Stack, Wrap, Text } from "@chakra-ui/react";

import { testArray } from "../wallet";
import TransferCard from "../components/TransferCard";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

const Pending = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(testArray);
    console.log(transactions);
  }, [transactions]);

  return (
    <Sidebar>
      <Breadcrumbs links={["Home", "Dashboard", "Pending Requests"]} />
      <Stack p={4} gap={3}>
        <Wrap spacing={8}>
          {transactions.map((transaction, index) => {
            if (transaction[9] === true) {
              return (
                <TransferCard
                  key={index}
                  pcp={transaction[1]}
                  pcpSpecialty={transaction[2]}
                  pcpAddress={transaction[0]}
                  pcpEmail={transaction[3]}
                  requester={transaction[5]}
                  requesterAddress={transaction[4]}
                  requesterSpecialty={transaction[6]}
                  requesterEmail={transaction[7]}
                />
              );
            }
          }) || <Text>No Pending Requests</Text>}
        </Wrap>
      </Stack>
    </Sidebar>
  );
};

export default Pending;
