"use client";

import { HStack, Icon } from "@chakra-ui/react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const FooterIcons = () => {
  return (
    <HStack>
      <Icon as={AiFillTwitterSquare} color="gray.400" boxSize={6} />
      <Icon as={AiFillInstagram} color="gray.400" boxSize={6} />
    </HStack>
  );
};

export default FooterIcons;
