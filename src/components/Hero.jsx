import React from "react";
import {
  Stack,
  Heading,
  Button,
  Container,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Doctor from "../assets/doctor.svg";
import initWallet from "../wallet";

const Hero = () => {
  let navigate = useNavigate();

  const connectWallet = async () => {
    await initWallet();
    navigate("/dashboard");
  };

  return (
    <Container maxW="container.xl">
      <Stack direction={{ base: "column", md: "row" }} py={8}>
        <Flex flex="1">
          <Stack justifyContent="center" gap={8}>
            <Box maxW="50ch">
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                Decentralized and secure
              </Heading>
            </Box>
            <Stack direction="row" gap={8}>
              <Button colorScheme="blue" p={4} onClick={connectWallet}>
                Connect Wallet
              </Button>
              <Button variant="link">Learn More</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex="1" pt={{ base: 4, md: 0 }}>
          <Image src={Doctor} alt="doctor" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
