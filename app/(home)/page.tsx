"use client"

import Script from "next/script";
import Title from "./components/title";
import Contact from "./components/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const vantaRef = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let vantaEffect: any;
    const loadVanta = async () => {
      // @ts-expect-error womp womp
      const VANTA = await import("vanta/dist/vanta.globe.min")
      vantaEffect = VANTA.default({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: "#171717",
      })
    }
    loadVanta()

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [])

  return (
    <main className="relative w-screen h-screen flex justify-center items-center z-40">
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
      <Title />
      <Contact />
      <Button className="font-semibold rounded-full cursor-pointer transition hover:scale-105 absolute top-4 left-1/2 -translate-x-1/2 z-40" asChild>
        <Link href="/about">About Me</Link>
      </Button>
      <Button className="font-semibold rounded-full cursor-pointer transition hover:scale-105 absolute bottom-4 left-1/2 -translate-x-1/2 z-40" asChild>
        <Link href="/projects">Projects</Link>
      </Button>
      <div id="homepage-background" ref={vantaRef} className="block w-full h-full absolute top-0 left-0 z-0" />
    </main>
  );
}
