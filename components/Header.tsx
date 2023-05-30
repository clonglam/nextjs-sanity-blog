import React from "react"
import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex aligns-center space-x-2">
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1685440210801-d66177b55a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="branding-icon"
            width={50}
            height={50}
            className="rounder-full"
          />
        </Link>
        <h1>Hugo Lam</h1>
      </div>

      <div className="px-5 py-3 text-sm md:text-base bg-gray-900 text-branding flex items-center rounded-full">
        Vist My Github
      </div>
    </header>
  )
}

export default Header
