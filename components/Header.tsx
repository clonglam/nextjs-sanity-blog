import React from "react"
import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 border-b">
      <div className="flex aligns-center space-x-2 cursor-pointer">
        <Link href="/">
          <h1>Clong Journey</h1>
        </Link>
      </div>

      <a
        href="https://github.com/clonglam"
        target="_blank"
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-branding flex items-center rounded-full cursor-pointer"
      >
        Vist My Github
      </a>
    </header>
  )
}

export default Header
