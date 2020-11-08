export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "splashImage",
      title: "Banner",
      type: "image",
    },
    {
      name: "children",
      title: "Sub categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "subCategory" }],
        },
      ],
    },
  ],
};
