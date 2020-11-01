import S from "@sanity/desk-tool/structure-builder";

import { MdBusiness, MdInfo, MdViewModule, MdLibraryBooks, MdPanorama, MdInfoOutline, MdPeopleOutline } from "react-icons/md";

export default () =>
  S.list()
    .title("Indhold")

    .items([
      S.listItem().title("Products").icon(MdViewModule).schemaType("product").child(S.documentTypeList("product").title("All products")),

      S.listItem().title("Categories").icon(MdLibraryBooks).schemaType("category").child(S.documentTypeList("category").title("All categories")),
      S.divider(),

      S.listItem()
        .title("Other")
        .icon(MdInfo)
        .child(
          S.list()
            .title("Other")
            .items([S.listItem().title("Frontpage").icon(MdPanorama).child(S.editor().id("frontPage").schemaType("frontPage").documentId("frontPage").title("Frontpage"))])
        ),

      S.divider(),
    ]);
