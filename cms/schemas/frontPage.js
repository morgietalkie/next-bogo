export default {
  name: "frontPage",
  title: "Frontpage",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],

  fields: [
    {
      name: "image",
      title: "Splash image",
      type: "image",
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "product" },
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
