import Script from "next/script";
import Title from "./components/title";
import Contact from "./components/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        strategy="beforeInteractive"
      />
      <Script id="script">
        {
          `VANTA.GLOBE({
            el: "#homepage-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: "#171717"
          })`
        }
      </Script>
      <main className="relative w-screen h-screen flex justify-center items-center">
        <Title />
        <Contact />
        <Button className="font-semibold rounded-full cursor-pointer transition hover:scale-105 absolute top-4 left-1/2 -translate-x-1/2 z-40" asChild>
          <Link href="/about">About Me</Link>
        </Button>
        <div id="homepage-background" className="block w-full h-full absolute top-0 left-0 z-0" />
      </main>
    </>
  );
}
