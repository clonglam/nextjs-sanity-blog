import React from "react"
import { Icon, Icons } from "./icons"
import { siteConfig } from "@/app/config/site"

type Props = {}

function SocialMediaSection({}: Props) {
  return (
    <div className="flex h-9 gap-x-3 py-5">
      <SocialMediaIcon
        media={siteConfig.socialMedia.twitter}
        SIcon={Icons.twitter}
      />
      <SocialMediaIcon
        media={siteConfig.socialMedia.github}
        SIcon={Icons.gitHub}
      />
      <SocialMediaIcon
        media={siteConfig.socialMedia.linkedin}
        SIcon={Icons.linkedin}
      />
    </div>
  )
}

export default SocialMediaSection

interface SocialMediaIconType {
  media: string
  SIcon: Icon
}

export function SocialMediaIcon({ media, SIcon }: SocialMediaIconType) {
  return (
    <a href={media} target="_blank" rel="noreferrer">
      <div className={"w-9 px-0"}>
        <SIcon className="h-5 w-5 " />
        <span className="sr-only">{media}</span>
      </div>
    </a>
  )
}
