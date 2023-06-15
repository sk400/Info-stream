import { NewsCards } from "@/components";
import { getSearchedNews } from "@/lib/datafetchingFunctions";

const SearchResultsPage = async ({ searchParams: { searchTerm } }) => {
  const data = await getSearchedNews(searchTerm?.toString());

  const allNews = data?.value;

  return <NewsCards allNews={allNews} />;
};

export default SearchResultsPage;
