import { getDefaultDocumentNode } from "./structure"
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"
import { myTheme } from "./theme"
import StudioNavbar from "./components/StudioNavbar"
import StudioLogo from "./components/StudioLogo"
import { markdownSchema } from "sanity-plugin-markdown/next"
import { CustomMarkdownInput } from "./components/CustomMarkdownInput"

export default defineConfig({
  basePath: "/studio",
  name: "Hugo_Blog_content_Studio",
  title: "Hugo_Blog_content_Studio",
  projectId,

  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema({ input: CustomMarkdownInput }),
  ],
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
})
