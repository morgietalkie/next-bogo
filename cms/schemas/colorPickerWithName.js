export default {
  name: "colorPickerWithName",
  title: "Color Picker",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Color name",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "color",
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
