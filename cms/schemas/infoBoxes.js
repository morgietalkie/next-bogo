export default {
  name: "infoBoxes",
  title: "infoboxes",
  type: "object",

  fields: [
    {
      name: "product",
      title: "Select product",
      type: "reference",
      to: { type: "product" },
    },
    {
      name: "title",
      title: "Catchy title",
      type: "string",
    },
    {
      name: "description",
      title: "Short description",
      type: "text",
    },
    {
      name: "image",
      title: "Splash image",
      type: "image",
    },
    {
      name: "ctaButton",
      title: "Text on button",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "image",
    },
  },
};
