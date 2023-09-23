import { CustomMDX } from "@/components/mdx-remote"
import urlFor from "@/lib/urlFor"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Image from "next/image"

interface Props {
  params: {
    slug: string
  }
}

export const revalidate = 60 // revalidate page every 60s

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{
  slug
}`
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function PostDetailPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->,
        tags[]->
       
    }
    `

  const post: Post = await client.fetch(query, { slug })

  const { author, _createdAt, description, categories, content, tags } = post

  return (
    <article className="px-10 pb-20 mx-auto max-w-4xl">
      <section className="space-y-2 border border-branding text-white">
        <div className="relative flex flex-col md:flex-row min-h-48 justify-between gap-y-5">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-5 bg-branding w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>

                <p>
                  {new Date(_createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <AuthorInfo author={author} />

            <div className="flex items-center space-x-2">
              <h2 className="italic">{description}</h2>
            </div>

            <CategoryBadge categories={categories} />
          </section>
        </div>
      </section>
      <div className="flex">
        <span>Tags:</span>
        <div className="flex gap-x-1">
          {tags.map((tag, index) => (
            <>
              <span key={index}>{tag.label}</span>
              {tags.length !== index + 1 && <span>|</span>}
            </>
          ))}
        </div>
      </div>

      <CustomMDX source={content} />
    </article>
  )
}

export default PostDetailPage

interface IAuthorInfo {
  author: Author
}
function AuthorInfo({ author }: IAuthorInfo) {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={urlFor(author.image).url()}
        alt={author.name}
        height={40}
        width={40}
        className="rounded-full w-12 h-12"
      />
      <div className="w-64">
        <h3>{author.name}</h3>
        <div>{/* TODO: Author Bio */}</div>
      </div>
    </div>
  )
}

function CategoryBadge({ categories }: { categories: Category[] }) {
  return (
    <div className="flex items-center justify-end mt-auto space-x-2">
      {categories.map(({ _id, title }) => (
        <p
          key={_id}
          className="bg-gray-800 text-white rounded-full text-sm font-semibold px-3 py-1 mt-4"
        >
          {title}
        </p>
      ))}
    </div>
  )
}
