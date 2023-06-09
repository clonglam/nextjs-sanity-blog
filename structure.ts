import Iframe from "sanity-plugin-iframe-pane"
import { DefaultDocumentNodeResolver } from "sanity/desk"

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          // Optional: set default Size
          defaultSize: "dekstop",

          // Optional add a reload button or reload new document revisions
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title("Preview"),
    ])
  }
}
