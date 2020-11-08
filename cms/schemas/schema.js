// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import productVariant from "./productVariant";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import frontPage from "./frontPage";
import infoBoxes from "./infoBoxes";
import header from "./header";
import footer from "./footer";
import headerArray from "./headerArray";
import colorPickerWithName from "./colorPickerWithName";
import subCategory from "./subCategory";
import fullWidthImage from "./locale/fullWidthImage";
import imageGrid from "./locale/imageGrid";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    frontPage,
    infoBoxes,
    header,
    footer,
    headerArray,
    colorPickerWithName,
    subCategory,
    fullWidthImage,
    imageGrid,
  ]),
});
