import Providers from "@/components/Providers"
import "./globals.css"
import { Raleway } from "next/font/google"

// Done after the video and optional: add page metadata
export const metadata = {
  title: "Pillwise Chat",
  description: "Welcome to the Pillwise chat-app!",
  icons: {
    icon: "/icons/icon-512x512.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
  manifest: "/manifest.json",
  themeColor: "#2A0E8F",
}

const raleway = Raleway({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
