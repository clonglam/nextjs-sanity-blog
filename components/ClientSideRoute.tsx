"use client"
import Link from "next/link"
import React from "react"

interface Props {
  children: React.ReactNode
  route: string
}
function ClientSideRoute({ children, route }: Props) {
  return <Link href={route}> {children}</Link>
}

export default ClientSideRoute
