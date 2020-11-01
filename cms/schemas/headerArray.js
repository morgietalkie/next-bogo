export default {
  name: "headerArray",
  title: "Menu items",
  type: "object",

  fields: [
    {
      name: "links",
      title: "Link",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],

  preview: {
    select: {
      title: "links.title",
      media: "image",
    },
  },
};
