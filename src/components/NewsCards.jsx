"use client";

import { useSession } from "next-auth/react";
import NewsCard from "./NewsCard";
import { Grid, GridItem } from "./chakra-ui";
import { userFavoriteNews, userReadingList } from "@/lib/sanityQueries";
import { client } from "../../sanity/lib/client";
import { useEffect, useState } from "react";

const NewsCards = ({
  allNews,
  category,
  allFavoriteNews,
  allReadingListNews,
}) => {
  const { data: session } = useSession();

  const [favoriteNews, setFavoriteNews] = useState([]);
  const [readLatterNews, setReadLatterNews] = useState([]);

  const getData = () => {
    const favoritesQuery = userFavoriteNews(session?.user?.id);
    const readingListQuery = userReadingList(session?.user?.id);

    client.listen(favoritesQuery).subscribe((update) => {
      const data = update.result;
      setFavoriteNews((prevValue) => [...prevValue, data]);
    });

    client.listen(readingListQuery).subscribe((update) => {
      const data = update.result;
      setReadLatterNews((prevValue) => [...prevValue, data]);
      // console.log(readLatterNews);
    });
  };

  getData();

  useEffect(() => {
    const newsData1 = allFavoriteNews?.filter(
      (item) => item?.userId === session?.user?.id
    );

    setFavoriteNews((prevValue) => newsData1);

    const newsData2 = allReadingListNews?.filter(
      (item) => item?.userId === session?.user?.id
    );

    setReadLatterNews((prevValue) => newsData2);
  }, [session?.user?.id, allFavoriteNews, allReadingListNews]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[67px] text-left text-15xl text-black font-poppins">
      <h2 className="m-0 relative text-[inherit] tracking-[0.05em] font-semibold font-inherit md:text-11xl sm:text-11xl">
        {category || "Latest"} news
      </h2>

      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {allNews?.map((news, index) => (
          <GridItem colSpan={{ base: 12, sm: 12, md: 6 }} key={news?.name}>
            <NewsCard
              imageIds="/assets/news-card-image1@2x.png"
              propPadding="10px"
              propBoxSizing="border-box"
              news={news}
              favoriteNews={favoriteNews}
              readLatterNews={readLatterNews}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default NewsCards;
