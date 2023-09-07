import { NewsCards } from "@/components";
import { getSearchedNews } from "@/lib/datafetchingFunctions";
import {
  allFavoriteNewsQuery,
  allReadingListNewsQuery,
} from "@/lib/sanityQueries";
import React from "react";
import { client } from "../../../../sanity/lib/client";

export const revalidate = 60;

const CategorisedNews = async ({ searchParams: { category } }) => {
  const data = await getSearchedNews(category?.toString(), false);

  const allNews = data?.value;

  const promises = [
    client.fetch(allFavoriteNewsQuery),
    client.fetch(allReadingListNewsQuery),
  ];

  const [allFavoriteNews, allReadingListNews] = await Promise.all(promises);

  return (
    <NewsCards
      allNews={allNews}
      category={category}
      allFavoriteNews={allFavoriteNews}
      allReadingListNews={allReadingListNews}
    />
  );
};

export default CategorisedNews;
