import { limitText } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Link from "next/link"

type Props = {}
const tagsQuery = groq`
  *[_type=="tag" ][0..7] 
`

async function RecommendedTopics({}: Props) {
  const tags: Tag[] = await client.fetch(tagsQuery)

  return (
    <div className="py-5">
      <h2 className="mb-3 font-bold cursor-pointer">Recommended topics</h2>

      <div className="flex flex-wrap gap-x-3 gap-y-5 w-full mb-5">
        {tags.map((tag) => (
          <button
            key={tag._id}
            className="btn bg-zinc-100 rounded-full text-xs py-[8px] px-[16px]"
          >
            {tag.label}
          </button>
        ))}
      </div>

      <p className="text-green-800 text-sm tracking-tight font-light">
        see more ...
      </p>
    </div>
  )
}

export default RecommendedTopics
