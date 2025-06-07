import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { Marquee } from "./marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tiles = [
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-js" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-yellow-400",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-react" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-blue-600",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-node" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-600 via-lime-600 to-green-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-lime-400",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-css" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-blue-600",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-html5" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-orange-600",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-java" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-red-600",
    },
    {
        icon: <FontAwesomeIcon icon="fa-brands fa-python" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-600 via-yellow-600 to-blue-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-blue-600",
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-database" className="size-full" />,
        bg: (
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-600 via-lime-600 to-green-600 opacity-70 blur-[20px]"></div>
        ),
        darkBg: "dark:bg-green-600",
    },
];



function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function Card(card) {
    const id = useId();
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            key={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu ${card.darkBg} dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}
        >
            {card.icon}
            {card.bg}
        </motion.div>
    );
}

export function Integrations() {
    const [randomTiles1, setRandomTiles1] = useState([]);
    const [randomTiles2, setRandomTiles2] = useState([]);
    const [randomTiles3, setRandomTiles3] = useState([]);
    const [randomTiles4, setRandomTiles4] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Ensures this runs client-side
            setRandomTiles1(shuffleArray([...tiles]));
            setRandomTiles2(shuffleArray([...tiles]));
            setRandomTiles3(shuffleArray([...tiles]));
            setRandomTiles4(shuffleArray([...tiles]));
        }
    }, []);

    return (
        <section id="cta">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="flex w-full flex-col items-center justify-center">
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee
                            reverse
                            className="-delay-[200ms] [--duration:10s]"
                            repeat={5}
                        >
                            {randomTiles1.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:25s]" repeat={5}>
                            {randomTiles2.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            className="-delay-[200ms] [--duration:20s]"
                            repeat={5}
                        >
                            {randomTiles1.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:30s]" repeat={5}>
                            {randomTiles2.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            className="-delay-[200ms] [--duration:20s]"
                            repeat={5}
                        >
                            {randomTiles3.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:30s]" repeat={5}>
                            {randomTiles4.map((review, idx) => (
                                <Card key={idx} {...review} />
                            ))}
                        </Marquee>
                        <div className="absolute ">
                            <div className="bg-backtround dark:bg-background absolute inset-0  -z-10 rounded-full opacity-40 blur-xl" />
                        </div>
                        <div className="to-backtround dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
                    </div>
                </div>
            </div>
        </section>
    );
}
