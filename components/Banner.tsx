import React from "react"

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-5 mb-10 space-x-2 lg:space-x-5">
      <div>
        <h1 className="font-bold text-6xl text-text-black mb-2">
          Hugo Lam BLog
        </h1>
        <p>
          Welcome to the blog that record my{" "}
          <span className="font-bold underline decoration-4 decoration-branding">
            experience and jounery
          </span>
          .
        </p>
      </div>

      <div className="">
        <p className="text-vp-c-text-light mt-5 md:mt-2 max-w-sm text-center lg:text-left">
          Latest feature | Web development | Technology | more and more ~
        </p>
      </div>
    </div>
  )
}

export default Banner
