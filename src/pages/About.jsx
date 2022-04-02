import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={4}>
        About
      </Container>
    </>
  );
};

export default About;
