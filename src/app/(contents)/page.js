import NewsCards from "@/components/NewsCards";
import { fetchNews } from "@/lib/datafetchingFunctions";
import { client } from "../../../sanity/lib/client";
import {
  allFavoriteNewsQuery,
  allReadingListNewsQuery,
} from "@/lib/sanityQueries";

export const revalidate = 10;

export default async function Home() {
  const data = await fetchNews();
  const allNews = data?.value;

  const promises = [
    client.fetch(allFavoriteNewsQuery),
    client.fetch(allReadingListNewsQuery),
  ];

  const [allFavoriteNews, allReadingListNews] = await Promise.all(promises);

  return (
    <div>
      <NewsCards
        allNews={allNews}
        allFavoriteNews={allFavoriteNews}
        allReadingListNews={allReadingListNews}
      />
    </div>
  );
}
