import React from "react";
import TransferCard from "../components/TransferCard";
import Sidebar from "../components/Sidebar";

const Pending = () => {
  return (
    <Sidebar>
      <h1>Pending</h1>
      <TransferCard />
    </Sidebar>
  );
};

export default Pending;
