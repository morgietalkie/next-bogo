import S from "@sanity/desk-tool/structure-builder";

import { MdBusiness, MdInfo, MdViewModule, MdStyle, MdPanorama, MdCallToAction, MdDragHandle } from "react-icons/md";

export default () =>
  S.list()
    .title("Indhold")

    .items([
      S.listItem().title("Products").icon(MdViewModule).schemaType("product").child(S.documentTypeList("product").title("All products")),

      S.listItem().title("Categories").icon(MdStyle).schemaType("category").child(S.documentTypeList("category").title("All categories")),
      S.listItem().title("Sub categories").icon(MdStyle).schemaType("subCategory").child(S.documentTypeList("subCategory").title("All sub categories")),
      S.divider(),

      S.listItem()
        .title("Other")
        .icon(MdInfo)
        .child(
          S.list()
            .title("Other")
            .items([
              S.listItem().title("Frontpage").icon(MdPanorama).child(S.editor().id("frontPage").schemaType("frontPage").documentId("frontPage").title("Frontpage")),
              S.listItem().title("Menu").icon(MdDragHandle).child(S.editor().id("header").schemaType("header").documentId("header").title("header")),
              S.listItem().title("Footer").icon(MdCallToAction).child(S.editor().id("footer").schemaType("footer").documentId("footer").title("header")),
            ])
        ),

      S.divider(),
    ]);
