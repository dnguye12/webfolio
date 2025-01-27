import ImageTrail from "@/components/motion/motion-trail";
import { useRef } from "react";
import Image from "next/image";
import { exampleImages } from '@/lib/example-images';
import TextReveal from "@/components/motion/text-reveal";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

const ImageHero = () => {
    const { scrollYProgress } = useScroll();
    const heroRef = useRef<HTMLDivElement>(null)
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section className="flex h-[calc(100svh-theme(spacing.14))] justify-center items-center pb-12 relative overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
            <div className="absolute top-0 left-0 z-0" ref={heroRef}>
                <ImageTrail containerRef={heroRef}>
                    {exampleImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex relative overflow-hidden w-24 h-24 "
                        >
                            <Image
                                src={image}
                                alt="image"
                                width={96}
                                height={96}
                            />
                        </div>
                    ))}
                </ImageTrail>
            </div>
            <div className="container relative mx-auto flex flex-col items-center px-4">
                <TextReveal
                    as="h1"
                    className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                >
                    Developer
                </TextReveal>
                <TextReveal
                    as="h1"
                    className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                >
                    +
                </TextReveal>
                <TextReveal
                    as="h1"
                    className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                >
                    Designer
                </TextReveal>
                <motion.div
                    className="mt-8"
                    style={{ opacity }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="h-8 w-8" />
                </motion.div>
            </div>
        </section>
    );
}

export default ImageHero;