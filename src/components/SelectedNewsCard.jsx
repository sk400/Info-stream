"use client";

import Link from "next/link";
import { Avatar, Flex, Heading, Icon, Spacer } from "./chakra-ui";
import { BiLinkExternal } from "react-icons/bi";
import { useSession } from "next-auth/react";

const SelectedNewsCard = ({ propBoxSizing, news }) => {
  // const { data: session } = useSession();
  // console.log(session);

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

        {/* <p className="m-0 relative font-medium text-dimgray text-sm">
          <ReactTimeago date={timeInUtc} />
        </p> */}
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
        <Spacer />
        <Link href={news?.url} target="_blank">
          <Icon as={BiLinkExternal} color="gray.400" boxSize={6} />
        </Link>
      </Flex>
    </div>
  );
};
export default SelectedNewsCard;
