import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import Loader from "./loader";
import { TransitionProvider } from "@/components/transition-provider";

export const metadata: Metadata = {
  title: "Nguyen Duc Huy",
  description: "A personal webpage for Nguyen Duc Huy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <TransitionProvider>
            <Loader />
          </TransitionProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
