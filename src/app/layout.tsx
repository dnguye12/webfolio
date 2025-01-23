import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nguyen Duc Huy",
  description: "A personal or professional webpage for Nguyen Duc Huy.",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
