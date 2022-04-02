import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={4}>
        Home
      </Container>
    </>
  );
};

export default Home;
