import React from "react";
import { Heading, Stack, Flex, Image, Text, Box, Wrap } from "@chakra-ui/react";
import { FaBriefcaseMedical, FaLock, FaMousePointer } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Security from "../assets/security.svg";
import IconCard from "../components/IconCard";
import Footer from "../components/Footer";

const Home = () => {
  const icons = [FaBriefcaseMedical, FaLock, FaMousePointer];
  return (
    <>
      <Navbar />
      <Hero />
      <Section bg="blue.50">
        <Stack direction={{ base: "column", md: "row" }} gap={12}>
          <Flex flex="1">
            <Stack gap={8}>
              <Heading>
                Use the blockchain and see where your medical records are going
              </Heading>
              <Text fontSize="lg">
                Patientport is a decentralized, secure, and open medical record.
                It is built on the Ethereum blockchain and securely stores all
                of your medical record requests, responses, and exchanges. Your
                medical data is encrypted and stored on the blockchain.
              </Text>
            </Stack>
          </Flex>
          <Flex flex="1" justifyContent="end">
            <Image src={Security} alt="security" maxH="96" />
          </Flex>
        </Stack>
      </Section>
      <Section>
        <Stack gap={8}>
          <Heading>How It Works</Heading>
          <Wrap spacing={8}>
            {["Secure", "Private", "Decentralized"].map((text, index) => (
              <Box>
                <IconCard
                  key={index + text}
                  icon={icons[index]}
                  heading={text}
                />
              </Box>
            ))}
          </Wrap>
        </Stack>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
