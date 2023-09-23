import React from "react"

type Props = {}

function PostCardLoader({}: Props) {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto animate-pluse">
      <span className="loading loading-spinner loading-sm" />
    </div>
  )
}

export default PostCardLoader
