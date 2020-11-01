export default {
  name: "footer",
  title: "footer",
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
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
