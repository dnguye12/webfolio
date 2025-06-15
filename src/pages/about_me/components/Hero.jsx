import LetterGlitch from "../../../components/react_bits/LetterGlitch";
import { TextLoop } from "../../../components/react_bits/TextLoop";

const textLoopVariants = {
    initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
    animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
    exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' }
};

const textLoopTransition = {
    type: 'spring',
    stiffness: 900,
    damping: 80,
    mass: 10
};

const Hero = ({ t }) => {
    const heroContent = [
        { key: 1, emoji: '💻', bgColor: 'bg-green-100' },
        { key: 2, emoji: '🎮', bgColor: 'bg-blue-100' },
        { key: 3, emoji: '🤔', bgColor: 'bg-yellow-100' },
        { key: 4, emoji: '📚', bgColor: 'bg-purple-100' },
        { key: 5, emoji: '✨', bgColor: 'bg-pink-100' },
        { key: 6, emoji: '🤝', bgColor: 'bg-orange-100' },
        { key: 7, emoji: '🛠️', bgColor: 'bg-gray-100' }
    ].map(({ key, emoji, bgColor }) => ({
        role: t(`hero_role_${key}`),
        action: t(`hero_action_${key}`),
        emoji,
        bgColor
    }));
    return (
        <section className=" relative w-full max-w-screen overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all pointer-events-none">
            <div className="relative py-[calc(clamp(5em,21vh,12em)*.5)]">
                <div className="flex w-full items-center justify-center px-4 md:px-6 z-10 relative">
                    <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.5)] font-medium text-neutral-900 dark:text-neutral-100">
                        <span>{t("hero_a")} </span>
                        <TextLoop className="overflow-y-clip"
                            transition={textLoopTransition}
                            variants={textLoopVariants}
                        >
                            {heroContent.map((content, index) => (
                                <span key={index}>{content.role}</span>
                            ))}
                        </TextLoop>
                        <br />
                        <span className="flex items-center gap-2 md:gap-4">
                            <span>{t("hero_who")}</span>
                            <TextLoop
                                className="my-auto inline-block overflow-y-clip"
                                transition={textLoopTransition}
                                variants={textLoopVariants}
                            >
                                {heroContent.map((content, index) => (
                                    <span
                                        key={index}
                                        className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full md:mx-4 md:h-[6rem] ${content.bgColor} drop-shadow-md`}
                                    >
                                        <span className="absolute inset-0 flex select-none items-center justify-center text-4xl md:text-7xl">
                                            {content.emoji}
                                        </span>
                                    </span>
                                ))}
                            </TextLoop>
                            <TextLoop
                                className="overflow-y-clip"
                                transition={textLoopTransition}
                                variants={textLoopVariants}
                            >
                                {heroContent.map((content, index) => (
                                    <span key={index}>{content.action}</span>
                                ))}
                            </TextLoop>
                        </span>
                    </h1>
                </div>
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                />
            </div>
        </section>
    );
}

export default Hero;