import React from "react"
import Image from "next/image"

function StudioLogo(props: any) {
  const { renderDefault, title } = props

  return (
    <div className="flex item-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://images.unsplash.com/photo-1685266324976-02cf0cc45f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
