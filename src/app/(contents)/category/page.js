import { NewsCards } from "@/components";
import { getSearchedNews } from "@/lib/datafetchingFunctions";
import React from "react";

const CategorisedNews = async ({ searchParams: { category } }) => {
  const data = await getSearchedNews(category?.toString(), false);

  const allNews = data?.value;

  return <NewsCards allNews={allNews} />;
};

export default CategorisedNews;
