import { previewData } from "next/headers"
import PreviewSuspense from "@/components/PreviewSuspense"
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import BlogList from "@/components/BlogList"
import PreviewBlogList from "@/components/PreviewBlogList"

// Enable NextJS to cache and dedupe queries

const query = groq`
  *[_type=="post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 60 // revalidate page every 60s

export default async function IndexPage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-branding">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return <BlogList posts={posts} />
}
