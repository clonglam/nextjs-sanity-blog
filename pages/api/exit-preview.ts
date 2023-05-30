import { NextApiRequest, NextApiResponse } from "next"
import React from "react"

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()
  res.writeHead(307, { Location: "/" })
  res.end()
}
