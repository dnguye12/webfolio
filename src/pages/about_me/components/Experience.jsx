import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SplitText from "../../../components/react_bits/SplitText";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const {t, i18n} = useTranslation("experience")
    const experiences = t("experiences", {returnObjects: true})

    return (
        <section id="experience" className="relative flex flex-col items-start justify-center my-8 lg:my-20 px-4 md:px-6 container mx-auto bg-neutral-100 dark:bg-neutral-900 transition-all">
            <div className=" flex flex-col items-center lg:-mt-8 mb-8">
                <SplitText
                    key={i18n.language}
                    text={t("Experience")}
                    className="font-semibold text-neutral-900 dark:text-neutral-100 transition-all text-[calc(clamp(3.25em,7vw,8em)*.5)]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>
            <div className="flex flex-col items-center container mx-auto">
                <VerticalTimeline className=" before:!bg-neutral-300 before:!w-0.5">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}

                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;