import { limitText } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Link from "next/link"

type Props = {}
const fearturedPostsQuery = groq`
  *[_type=="post" && featured == true][0..2]{
    slug, title, description, featured
  } | order(_createdAt desc) 
`

async function FeaturedPostsSection({}: Props) {
  const fearturedPosts: Post[] = await client.fetch(fearturedPostsQuery)

  return (
    <div className="py-5">
      <h2 className="mb-3 font-bold cursor-pointer">
        <Link href="/featured">Featured Posts</Link>
      </h2>

      <div>
        {fearturedPosts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <div className="py-3 tracking-tight leading-tight group cursor-pointer">
              <h3 className="text-md font-semibold group-hover:underline">
                {limitText(post.title, 40)}
              </h3>

              <p className="group-hover:underline text-zinc-600">
                {limitText(post.description, 50)}
              </p>
            </div>
          </Link>
        ))}

        <Link
          href="/featured"
          className="text-green-800 text-sm tracking-tight font-light cursor-pointer"
        >
          see more ...
        </Link>
      </div>
    </div>
  )
}

export default FeaturedPostsSection
