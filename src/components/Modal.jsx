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

const Modal = ({ isOpen, onClose }) => {
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Dr. Mark, M.D.</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap={3}>
          <Box>
            <Badge colorScheme="blue">Sender Wallet</Badge>
          </Box>
          <Text>0x221wdf8ojdfsasl</Text>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </UIModal>
  );
};

export default Modal;
