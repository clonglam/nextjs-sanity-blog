import Header from "@/components/Header"
import "@/styles/global.css"
import { Inter } from "next/font/google"
import "easymde/dist/easymde.min.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Clong Lam Programing Journey",
  description:
    "Frontend | Backend | Software develop | Full stack | ReactJs | NextJs | Javascript | Java | Python",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] min-h-[100vh] ">
        <Header />
        {children}
      </body>
    </html>
  )
}
