import { cn } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Link from "next/link"

type Props = { currentCategory?: string }
export const revalidate = 180 // revalidate page every 60s

const categoriesQuery = groq`
  *[_type=="category" ]
`

async function CategoryList({ currentCategory }: Props) {
  const categories = await client.fetch(categoriesQuery)

  return (
    <div className="flex space-x-4 py-3 px-5 border-b my-8">
      <Link
        className={cn(
          "cursor-pointer",
          (currentCategory === undefined || currentCategory === "all") &&
            "underline"
        )}
        href="/"
      >
        All
      </Link>

      {categories.map((cat: Category) => (
        <Link
          className={cn(
            "cursor-pointer",
            currentCategory === cat.slug?.current && "underline font-semibold"
          )}
          href={`?category=${cat.slug?.current}`}
          key={cat._id}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
