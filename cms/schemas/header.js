export default {
  name: "header",
  title: "Header",
  type: "document",

  fields: [
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
};
