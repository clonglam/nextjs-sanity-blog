"use client"

import { usePreview } from "@/lib/sanity.preview"
import PostsList from "./posts/PostsList"

interface Props {
  query: string
}

function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query)
  console.log("Loading posts... ", posts)

  return <PostsList posts={posts} />
}

export default PreviewBlogList
