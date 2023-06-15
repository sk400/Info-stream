import NewsCards from "@/components/NewsCards";
import { fetchNews } from "@/lib/datafetchingFunctions";

export default async function Home() {
  const data = await fetchNews();

  const allNews = data?.value;
  return (
    <div className="">
      <NewsCards allNews={allNews} />
    </div>
  );
}
