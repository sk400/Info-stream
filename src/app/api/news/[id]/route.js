import { client } from "../../../../../sanity/lib/client";

export const DELETE = async (request, { params: { id } }) => {
  try {
    const doc = await client.getDocument(id);

    if (!doc) {
      return new Response("Document not found.", { status: 404 });
    }

    await client.delete(id);

    return new Response(
      { result: "Document is successfully removed from favorites." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      "Failed to remove from favorites due to internal server error.",
      { status: 500 }
    );
  }
};
