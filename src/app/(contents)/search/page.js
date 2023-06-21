import { Text } from "@/components/chakra-ui";

import { NewsCards } from "@/components";
import { getSearchedNews } from "@/lib/datafetchingFunctions";

const SearchResultsPage = async ({ searchParams: { searchTerm } }) => {
  const data = await getSearchedNews(searchTerm?.toString(), true);

  const allNews = data?.value;

  if (allNews?.length < 0)
    return <Text>No results found for this search term.</Text>;

  return <NewsCards allNews={allNews} />;
};

export default SearchResultsPage;
