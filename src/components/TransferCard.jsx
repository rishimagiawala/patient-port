import React from "react";
import {
  Box,
  Divider,
  Heading,
  Text,
  Badge,
  Stack,
  Link,
  Button,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

import Card from "./Card";
import Modal from "./Modal";

const TransferCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();

  return (
    <>
      <Box maxW="md">
        <Card>
          <Stack gap={3}>
            <Box>
              <Badge colorScheme="blue">Pending</Badge>
            </Box>
            <Text>
              <Link color="blue.500" onClick={isOpen ? onClose : onOpen}>
                Dr. Mark, M.D.
              </Link>{" "}
              has requested your record from{" "}
              <Link color="blue.500" onClick={isOpen2 ? onClose2 : onOpen2}>
                Dr. Gupta, M.D.
              </Link>
            </Text>
            <Divider />
            <Box>
              <HStack justifyContent="space-between">
                <Text color="gray.500">Today at 6:23 PM</Text>
                <HStack gap={1}>
                  <Button colorScheme="red" variant="outline">
                    Deny
                  </Button>
                  <Button colorScheme="green">Accept</Button>
                </HStack>
              </HStack>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Modal isOpen={isOpen2} onClose={onClose2} />
    </>
  );
};

export default TransferCard;
