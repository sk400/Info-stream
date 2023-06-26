import { Text } from "@/components/chakra-ui";

import { NewsCards } from "@/components";
import { getSearchedNews } from "@/lib/datafetchingFunctions";
import {
  allFavoriteNewsQuery,
  allReadingListNewsQuery,
} from "@/lib/sanityQueries";
import { client } from "../../../../sanity/lib/client";

const SearchResultsPage = async ({ searchParams: { searchTerm } }) => {
  const data = await getSearchedNews(searchTerm?.toString(), true);

  const allNews = data?.value;

  if (allNews?.length < 0)
    return <Text>No results found for this search term.</Text>;

  const promises = [
    client.fetch(allFavoriteNewsQuery),
    client.fetch(allReadingListNewsQuery),
  ];

  const [allFavoriteNews, allReadingListNews] = await Promise.all(promises);

  return (
    <NewsCards
      allNews={allNews}
      allFavoriteNews={allFavoriteNews}
      allReadingListNews={allReadingListNews}
    />
  );
};

export default SearchResultsPage;
