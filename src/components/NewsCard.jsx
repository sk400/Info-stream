"use client";

import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Tooltip,
} from "./chakra-ui";

import { AiFillLike, AiFillRead } from "react-icons/ai";
import { MdSummarize } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

import ReactTimeago from "react-timeago";
import Link from "next/link";

const NewsCard = ({ imageIds, propBoxSizing, news }) => {
  const event = new Date("2023-06-15T09:12:01.0000000Z");
  const timeInUtc = event.toUTCString();

  return (
    <div
      className="flex-1 flex flex-col  items-start justify-start gap-[22px] text-left  text-black font-inter  hover:opacity-[1] lg:flex-[unset] lg:self-stretch sm:gap-[12px] mq320:cursor-pointer mq420:gap-[12px] cursor-pointer shadow-md hover:shadow-lg rounded-sm transition-shadow duration-200 p-5"
      style={{ boxSizing: propBoxSizing }}
    >
      <img
        className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[337px] shrink-0 object-cover"
        alt=""
        src={news?.image?.thumbnail?.contentUrl}
        width={news?.image?.thumbnail?.width}
        height={news?.image?.thumbnail?.height}
      />
      {/* provider details and reactTimeago */}
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center justify-start gap-[10px] ">
          <Avatar
            size="xs"
            name="Kent Dodds"
            src={news?.provider[0]?.image?.thumbnail?.contentUrl}
          />
          <p className="m-0 relative font-medium  text-sm">
            {news?.provider[0]?.name}
          </p>
        </div>
        {/* <Icon
          sx={{
            w: "10px",
            h: "10px",
            mb: 1,
            display: { base: "none", sm: "block" },
          }}
        >
          <RxDotFilled />
        </Icon> */}
        <p className="m-0 relative font-medium text-dimgray text-sm">
          <ReactTimeago date={timeInUtc} />
        </p>
      </div>
      {/* News details */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-15xl font-noto-serif sm:gap-[26px] mq420:gap-[26px]">
        <Heading as="h2" size="xl">
          {news?.name.substring(0, 60)}...
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
        <HStack spacing={5}>
          {/* Favorites */}
          <Icon as={AiFillLike} color="gray.400" boxSize={6} />

          {/* Reading list */}
          <Icon as={AiFillRead} color="gray.400" boxSize={6} />

          {/* Extract */}
          <Icon as={MdSummarize} color="gray.400" boxSize={6} />
        </HStack>
        <Spacer />
        <Link href={news?.url} target="_blank">
          <Icon as={BiLinkExternal} color="gray.400" boxSize={6} />
        </Link>
      </Flex>
    </div>
  );
};

export default NewsCard;
