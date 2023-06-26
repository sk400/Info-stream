"use client";

import Link from "next/link";
import {
  Avatar,
  Flex,
  Heading,
  Icon,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  useToast,
} from "./chakra-ui";
import { BiLinkExternal } from "react-icons/bi";
import { useSession } from "next-auth/react";
import ReactTimeago from "react-timeago";
import { MdDelete } from "react-icons/md";

const SelectedNewsCard = ({ propBoxSizing, news }) => {
  const event = new Date(news?.publishedAt);
  const timeInUtc = event.toUTCString();
  const { data: session } = useSession();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const remove = async () => {
    if (news?._id?.length !== 0 && session?.user?.id?.length !== 0) {
      try {
        const response = await fetch(`/api/news/${news?._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast({
            title: "Deleted successfully.",
            position: "top-right",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Make request with valid data.");
    }
  };

  return (
    <div
      className="flex-1 flex flex-col  items-start justify-start gap-[22px] text-left  text-black font-inter  hover:opacity-[1] lg:flex-[unset] lg:self-stretch sm:gap-[12px]  mq420:gap-[12px] cursor-pointer shadow-md hover:shadow-lg rounded-sm transition-shadow duration-200 p-5"
      style={{ boxSizing: propBoxSizing }}
    >
      <img
        className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[337px] shrink-0 object-cover"
        alt=""
        src={news?.mainImage}
      />
      {/* provider details and reactTimeago */}
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center justify-start gap-[10px] ">
          <Avatar size="xs" name="Kent Dodds" src={news?.providerImage} />
          <p className="m-0 relative font-medium  text-sm">{news?.provider}</p>
        </div>

        <p className="m-0 relative font-medium text-dimgray text-sm">
          <ReactTimeago date={timeInUtc} />
        </p>
      </div>
      {/* News details */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-15xl font-noto-serif sm:gap-[26px] mq420:gap-[26px]">
        <Heading as="h2" size="xl">
          {news?.title?.substring(0, 60)}...
        </Heading>

        <p className="m-0 self-stretch relative text-base font-poppins sm:font-light sm:font-poppins sm:text-base mq420:text-sm line-clamp-2">
          {news?.description}...
        </p>
      </div>
      {/* Actions */}
      <Flex
        sx={{
          w: "100%",
        }}
      >
        <Icon
          as={MdDelete}
          color="gray.400"
          boxSize={6}
          onClick={() => {
            onOpen();
          }}
        />
        <Spacer />

        <Link href={news?.url} target="_blank">
          <Icon as={BiLinkExternal} color="gray.400" boxSize={6} />
        </Link>
      </Flex>
      {/* Modal */}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Are you sure you want to delete this news from this list
              permanently ?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              No
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                toast({
                  title: "Deleting...",
                  position: "top-right",
                  status: "info",
                  duration: 3000,
                  isClosable: true,
                });
                onClose();
                remove();
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default SelectedNewsCard;
