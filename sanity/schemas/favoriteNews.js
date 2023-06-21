export default {
  name: "favoriteNews",
  title: "Favorite news",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "string",
    },
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "provider",
      title: "Provider",
      type: "string",
    },
    {
      name: "providerImage",
      title: "Provider image",
      type: "string",
    },
  ],
};
