"use client";

import { useToast } from "@chakra-ui/react";

const Feedback = ({ title, description, status }) => {
  const toast = useToast();
  return toast({
    title: title,
    description: description,
    position: "top-right",
    status: status,
    duration: 9000,
    isClosable: true,
  });
};

export default Feedback;
