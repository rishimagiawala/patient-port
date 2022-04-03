import React from "react";
import {
  Stack,
  Heading,
  Button,
  Container,
  Image,
  Flex,
  Box,
  Link,
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
                Connecting smart contracts to healthcare
              </Heading>
            </Box>
            <Stack direction="row" gap={8}>
              <Button colorScheme="blue" p={4} onClick={connectWallet}>
                Connect Wallet
              </Button>
              <Button
                as={Link}
                variant="link"
                href="https://devpost.com/software/patientport"
              >
                Learn More
              </Button>
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
