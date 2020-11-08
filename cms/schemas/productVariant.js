export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "colorPickerWithName",
      options: {
        columns: 1,
        collapsible: true,
      },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "SKU",
      name: "sku",
      type: "string",
    },
    // {
    //   title: "Taxable",
    //   name: "taxable",
    //   type: "boolean",
    // },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    // {
    //   title: 'Bar code',
    //   name: 'barcode',
    //   type: 'barcode'
    // }
  ],

  preview: {
    select: {
      title: "color.name",
      media: "null",
    },
  },
};
