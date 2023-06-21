import { v4 as uuidv4 } from "uuid";
import { client } from "../../../../../sanity/lib/client";

export const POST = async (request) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const { userId, newsArticle } = await request.json();
    if (!userId) {
      return new Response("Unauthorized request.", { status: 401 });
    }

    const doc = {
      _id: uuidv4(),
      _type: "favoriteNews",
      userId,
      title: newsArticle?.name,
      description: newsArticle?.description,
      mainImage: newsArticle?.image?.thumbnail?.contentUrl,
      publishedAt: newsArticle?.datePublished,
      url: newsArticle?.url,
      provider: newsArticle?.provider[0]?.name,
      providerImage: newsArticle?.provider[0]?.image?.thumbnail?.contentUrl,
    };

    await client.createIfNotExists(doc);

    return new Response(
      { result: "Successfully added to favorite news." },
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    return new Response(
      "Failed to add to favorites due to internal server error.",
      { status: 500 }
    );
  }
};
