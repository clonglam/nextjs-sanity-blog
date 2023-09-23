import PostsList from "@/components/posts/PostsList"
import CategoryList from "@/components/CategoryList"
import RecommendedTopics from "@/components/RecommendedTopics"
import SocialMediaSection from "@/components/SocialMediaSection"
import FeaturedPostsSection from "@/components/posts/FeaturedPostsSection"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { Suspense } from "react"

const query = groq`
  *[_type=="post"  && $categorySlug in categories[]->slug.current]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
const allPostQuery = groq`
  *[_type=="post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 60 // revalidate page every 60s

type Props = {
  searchParams: { category: string }
}

export default async function IndexPage({ searchParams: { category } }: Props) {
  const posts = category
    ? await client.fetch(query, { categorySlug: category })
    : await client.fetch(allPostQuery)

  return (
    <div className="flex space-x-6 max-w-7xl mx-auto">
      <div className="flex-1">
        {/* @ts-expect-error Server Component */}
        <CategoryList currentCategory={category} />
        <PostsList posts={posts} />
      </div>

      <div className="border-l p-5 w-1/4 hidden lg:block">
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Server Component */}
          <FeaturedPostsSection />
          <hr />
          {/* @ts-expect-error Server Component */}
          <RecommendedTopics />
          <hr />
          <SocialMediaSection />
        </Suspense>
      </div>
    </div>
  )
}
