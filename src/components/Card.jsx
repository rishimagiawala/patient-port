import React from "react";
import { WrapItem, Circle, Icon, Heading, Stack } from "@chakra-ui/react";

const Card = ({ icon, heading }) => {
  return (
    <WrapItem w="sm" bg="blue.50" py={10}>
      <Stack alignItems="center" w="full" gap={2}>
        <Circle size="16" bg="blue.500" color="white">
          <Icon as={icon} boxSize="2em" />
        </Circle>
        <Heading>{heading}</Heading>
      </Stack>
    </WrapItem>
  );
};

export default Card;
