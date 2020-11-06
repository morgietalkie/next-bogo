export default {
  name: "frontPage",
  title: "Frontpage",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],

  fields: [
    {
      name: "pageTitle",
      title: "Page title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "image",
      title: "Splash image",
      type: "image",
    },

    {
      name: "infoBoxes",
      title: "Infoboxes",
      type: "array",
      of: [
        {
          type: "infoBoxes",
        },
      ],
    },

    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "headerArray",
        },
      ],
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
