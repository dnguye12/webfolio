import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SplitText from "../../../components/react_bits/SplitText";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        title: "Intern",
        company_name: "Interdisciplinary Laboratory of Digital Sciences - Orsay, France",
        iconSrc: "lisn.png",
        iconBg: "#FFF9E0",
        date: "March 2024 - August 2024",
        points: [
            "Python, OpenCV, MediaPipe, C#, Unity, Blender, Sockets",
            "Developed an interactive AI agent for facial emotion recognition, gaze tracking and human pose estimation.",
            "Implemented the solution in Python and Unity, integrating 3D animations, motion-capture data and realistic speech synthesis."
        ]
    },
    {
        title: "Junior Developer",
        company_name: "Dealsup - Antony, France",
        iconSrc: "dealsup.jpg",
        iconBg: "#FFF",
        date: "February 2023 - January 2024",
        points: [
            "Figma, React, Axios, Tailwind CSS",
            "Designed and built a new company administration system, covering both UI/UX design and front-end development.",
            "Delivered an intuitive, ergonomic interface that reduced system errors and improved administrative efficiency."
        ]
    },
    {
        title: "Freelancer",
        company_name: "Fiverr, Upwork, Discord",
        iconSrc: "fiverr.png",
        iconBg: "#1DBF73",
        date: "November 2021 - Present",
        points: [
            "HTML, CSS, JavaScript, React, Next.js, PHP, Node.js, Three.js, Tailwind, Bootstrap",
            "Developed web solutions for a diverse client base, handling everything from front-end to back-end.",
            "Completed over 75 projects with an average rating of 4.9 stars on Fiverr."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative flex flex-col items-start justify-center my-[calc(clamp(5em,21vh,12em)*.5)] px-4 md:px-6 container mx-auto bg-neutral-100 dark:bg-neutral-900 transition-all">
            <div className=" flex flex-col items-center -mt-8 mb-8">
                <SplitText
                    text="My Experiences"
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