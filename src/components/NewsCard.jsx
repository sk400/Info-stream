"use client";

import { Avatar, Flex, HStack, Heading, Icon, Spacer } from "./chakra-ui";

import { AiFillLike, AiFillRead } from "react-icons/ai";

import { BiLinkExternal } from "react-icons/bi";

import ReactTimeago from "react-timeago";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";

const NewsCard = ({ propBoxSizing, news, favoriteNews, readLatterNews }) => {
  const event = new Date(news?.datePublished);
  const timeInUtc = event.toUTCString();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInReadingList, setIsInReadingList] = useState(false);

  const { data: session } = useSession();
  const toast = useToast();

  // Check if already in favorites
  const checkFavorites = () => {
    if (favoriteNews?.length !== 0) {
      const alreadyInFavorites = favoriteNews?.find(
        (item) =>
          item?.title === news?.name &&
          item?.description === news?.description &&
          item?.provider === news?.provider[0]?.name &&
          item?.publishedAt === news?.datePublished &&
          item?.providerImage ===
            news?.provider[0]?.image?.thumbnail?.contentUrl
      );

      if (alreadyInFavorites) {
        setIsFavorite(true);
      }
    }
  };

  // Check if already in reading list

  const checkReadingList = () => {
    if (readLatterNews?.length !== 0) {
      const alreadyInReadingList = readLatterNews?.find(
        (item) =>
          item?.title === news?.name &&
          item?.description === news?.description &&
          item?.provider === news?.provider[0]?.name &&
          item?.publishedAt === news?.datePublished &&
          item?.providerImage ===
            news?.provider[0]?.image?.thumbnail?.contentUrl
      );

      if (alreadyInReadingList) {
        setIsInReadingList(true);
      }
    }
  };

  // Add to favorites
  const addToFavorites = async () => {
    if (session.user.id) {
      try {
        // setIsAddingToFavorites(true);
        const response = await fetch("/api/news/favorites", {
          method: "POST",

          body: JSON.stringify({
            userId: session?.user?.id,
            newsArticle: news,
          }),
        });

        if (response.ok) {
          // setIsAddingToFavorites(false);
          toast({
            title: "Added to favorites successfully.",
            position: "top-right",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          // window.location.reload();
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Some error occured.",
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please sign in first for personalised experience.",
        position: "top-right",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  // Remove from favorites

  const addToReadLater = async () => {
    if (session.user.id) {
      try {
        const response = await fetch("/api/news/reading-list", {
          method: "POST",

          body: JSON.stringify({
            userId: session?.user?.id,
            newsArticle: news,
          }),
        });

        if (response.ok) {
          toast({
            title: "Added to reading list successfully.",
            position: "top-right",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Some error occured.",
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please sign in first for personalised experience.",
        position: "top-right",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    checkFavorites();
    checkReadingList();
  }, [favoriteNews, readLatterNews]);

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
        {session?.user?.id && (
          <HStack spacing={5}>
            {/* Favorites */}

            {isFavorite ? (
              <Icon as={AiFillLike} color="cyan.400" boxSize={6} />
            ) : (
              <Icon
                as={AiFillLike}
                color="gray.400"
                boxSize={6}
                onClick={() => {
                  addToFavorites();

                  toast({
                    title: "Adding to favorites.",
                    position: "top-right",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              />
            )}

            {/* Reading list */}

            {isInReadingList ? (
              <Icon as={AiFillRead} color="cyan.400" boxSize={6} />
            ) : (
              <Icon
                as={AiFillRead}
                color="gray.400"
                boxSize={6}
                onClick={() => {
                  addToReadLater();
                  toast({
                    title: "Adding to reading list.",
                    position: "top-right",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              />
            )}

            {/* Extract */}
            {/* <Icon as={MdSummarize} color="gray.400" boxSize={6} /> */}
          </HStack>
        )}
        <Spacer />
        <Link href={news?.url} target="_blank">
          <Icon as={BiLinkExternal} color="gray.400" boxSize={6} />
        </Link>
      </Flex>
    </div>
  );
};

export default NewsCard;
