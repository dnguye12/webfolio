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

const About = () => {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col z-40">
                <Header />
                <main className="flex-1 drop-shadow-md">
                    <div className="px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
                        <ImageHero />
                    </div>
                    <Separator className="bg-neutral-700" />
                    <AboutMe />
                    <Separator className="bg-neutral-700" />
                    <Hero />
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

export default About;