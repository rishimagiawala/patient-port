import React, { useState } from "react";
import {
  Box,
  Divider,
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

const TransferCard = ({
  pcp,
  pcpSpecialty,
  pcpAddress,
  pcpEmail,
  requester,
  requesterAddress,
  requesterSpecialty,
  requesterEmail,
  time,
}) => {
  const [modalInfo, setModalInfo] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box maxW="md">
        <Card>
          <Stack gap={3}>
            <Box>
              <Badge colorScheme="blue">Pending</Badge>
            </Box>
            <Text>
              <Link
                color="blue.500"
                onClick={() => {
                  setModalInfo({
                    requester,
                    requesterAddress,
                    requesterSpecialty,
                    requesterEmail,
                  });
                  onOpen();
                }}
              >
                {requester}
              </Link>{" "}
              has requested your record from{" "}
              <Link
                color="blue.500"
                onClick={() => {
                  setModalInfo({
                    pcp,
                    pcpSpecialty,
                    pcpAddress,
                    pcpEmail,
                  });
                  onOpen();
                }}
              >
                {pcp}
              </Link>
            </Text>
            <Divider />
            <Box>
              <HStack justifyContent="space-between">
                <Text color="gray.500">{time}</Text>
                <Button colorScheme="green">Accept</Button>
              </HStack>
            </Box>
          </Stack>
        </Card>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} info={modalInfo} />
    </>
  );
};

export default TransferCard;
