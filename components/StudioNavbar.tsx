import React from "react"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

interface Props {}

const Studionavbar = (props: any) => {
  return (
    <div>
      <div className="flex item-center justify-between p-5">
        <Link href="/" className="flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-branding mr-2" />
          Go the Website
        </Link>

        <div className="hidden md:flex px-5 py-3 rounded-lg justify-center border-2 border-branding">
          <h1 className="font-bold text-white text-md">
            Welcom to vist my gitHub
          </h1>
          <Link
            href="https://github.com/clonglam"
            target="_blank"
            className="font-bold ml-2 text-branding hover:underline"
          >
            https://github.com/clonglam
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default Studionavbar
