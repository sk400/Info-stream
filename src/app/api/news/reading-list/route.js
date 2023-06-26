import { v4 as uuidv4 } from "uuid";
import { client } from "../../../../../sanity/lib/client";
import { getAReadLatterNewsQuery } from "@/lib/sanityQueries";

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
      _type: "readLatterNews",
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
      { result: "Successfully added to reading list." },
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

export const DELETE = async (request) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const { docId, userId } = await request.json();

    if (!userId) {
      return new Response("Unauthorized request.", { status: 401 });
    }

    const query = getAReadLatterNewsQuery(docId, userId);

    const data = await client.fetch(query);

    if (data?.length === 0) {
      return new Response("Document not found.", { status: 404 });
    }

    await client.delete(docId);

    return new Response(
      { result: "Document is successfully removed from reading list." },
      { status: 200, headers }
    );

    // await client.delete(docId);
  } catch (error) {
    return new Response(
      "Failed to remove from reading list due to internal server error.",
      { status: 500 }
    );
  }
};
