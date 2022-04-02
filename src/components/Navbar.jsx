import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.jsx";

const Links = ["Home", "About", "Contact"];
const LinkURLS = ["/", "/about", "/contact"];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Container maxW="container.xl" py={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            aria-label={"Toggle menu"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            justifyContent="space-between"
            w={{ base: "none", md: "full" }}
            mx={{ base: "auto", md: 0 }}
          >
            <HStack>
              <Logo boxSize={8} />
              <Heading as="h4" size="md">
                patientport
              </Heading>
            </HStack>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {Links.map((link, index) => (
                <NavLink key={index} to={LinkURLS[index]}>
                  {link}
                </NavLink>
              ))}
              <Button colorScheme="blue">Connect Wallet</Button>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
