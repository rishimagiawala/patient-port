import React from "react";
import {
  Modal as UIModal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalContent,
  Badge,
  Text,
  Box,
} from "@chakra-ui/react";

const Modal = ({ isOpen, onClose, info }) => {
  const { requester, requesterAddress, pcpAddress, email } = info;

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{requester ? requester : "Dr. Gupta, M.D."}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap={3}>
          <Box>
            <Badge colorScheme="blue">Wallet</Badge>
          </Box>
          {requesterAddress && <Text>{requesterAddress}</Text>}
          {pcpAddress && <Text>{pcpAddress}</Text>}
          {email && <Text>{email}</Text>}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </UIModal>
  );
};

export default Modal;
