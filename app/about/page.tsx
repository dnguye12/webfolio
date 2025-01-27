"use client"

import { Separator } from "@/components/ui/separator";
import Header from "./components/header";
import Hero from "./components/hero";
import SmoothScroll from '@/components/smooth-scroll';
import AboutMe from "./components/about-me";
import ImageHero from "./components/image-hero";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";

const AboutPage = () => {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col z-40">
                <Header />
                <main className="flex-1 drop-shadow-md">
                    <div className="hidden lg:block px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
                        <ImageHero />
                    </div>
                    <div className="block lg:hidden">
                        <Hero />
                    </div>
                    <Separator className="bg-neutral-700" />
                    <AboutMe />
                    <Separator className="bg-neutral-700" />
                    <div className="hidden lg:block">
                        <Hero />
                    </div>
                    <Separator className="bg-neutral-700" />
                    <Skills />
                    <Separator className="bg-neutral-700" />
                    <Experience />
                    <Separator className="bg-neutral-700" />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default AboutPage;