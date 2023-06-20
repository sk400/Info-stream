export default {
  name: "favoritePost",
  title: "Favorite post",
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
      type: "image",
      options: {
        hotspot: true,
      },
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
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
