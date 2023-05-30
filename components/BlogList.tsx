import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import urlFor from "../lib/urlFor"
import Image from "next/image"
import React from "react"
import ClientSideRoute from "./ClientSideRoute"

interface Props {
  posts: Post[]
}
function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-branding mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map(
          ({
            _id,
            mainImage,
            author,
            title,
            _createdAt,
            categories,
            description,
            slug,
          }) => (
            <ClientSideRoute key={_id} route={`/post/${slug.current}`}>
              <div className="group flex flex-col cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-lg gorup-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={urlFor(mainImage).url()}
                    alt={author.name}
                    fill
                  />

                  <div
                    className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg 
              rounded drop-shadow-lg text-white p-5 flex justify-between"
                  >
                    <div>
                      <p className="font-bold">{title}</p>
                      <p>
                        {new Date(_createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <CategoryBadeges categories={categories} />
                  </div>
                </div>

                <TitleAndDescription title={title} description={description} />

                <p className="">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
          )
        )}
      </div>
    </div>
  )
}

export default BlogList

function CategoryBadeges({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
      {categories.map((c) => (
        <p
          key={c._id}
          className="bg-branding text-center rounded-full text-black px-3 py-1 font-semibold text-sm"
        >
          {c.title}
        </p>
      ))}
    </div>
  )
}

function TitleAndDescription({
  title,
  description,
}: {
  description: string
  title: string
}) {
  return (
    <div className="mt-5 flex-1">
      <p className="underline text-lg font-bold"> {title}</p>
      <p className="line-clamp-2 text-gray-500"> {description}</p>
    </div>
  )
}
