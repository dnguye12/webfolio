import ExperienceCard from "./experience-card";

const experiences = [
    {
        name: 'Intern',
        duration: '03/2024 – 08/2024',
        company: 'LISN, Paris Saclay University',
        description: `Implemented a facial recognition system, gaze tracking, and pose estimation using Python. Developed an interactive AI agent in Unity, featuring 3D animations, motion capture, adaptive responses, and voice synthesis.`,
        tech: "Python, Unity, C#"
      },
      {
        name: 'Junior Developer',
        duration: '02/2023 – 01/2024',
        company: 'Dealsup',
        description: `Designed and implemented the administration page using ReactJS. Enhanced backend security and resolved bugs with ExpressJS.`,
        tech: "React, ExpressJS, NodeJS, Javascript, MUI"
    },
      {
        name: 'Freelancer',
        duration: '11/2021 – Present',
        company: 'Fiverr, Upwork, Discord',
        description: `Developed e-commerce websites, especially for online gaming services like Minecraft, GTA 5, etc. Completed over 75 projects with a 4.9 rating on Fiverr. Created one of the most downloaded themes for Tebex (Shopify for gaming servers).`,
        tech: "HTML, CSS, Javascript, MongoDB"
      }
];

const Experience = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-xl font-semibold sm:text-2xl text-center">🛠️ Experience</h2>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <div className="grid grid-cols-1 gap-4">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience_${index}`}
                                name={experience.name}
                                description={experience.description}
                                company={experience.company}
                                duration={experience.duration}
                                tech={experience.tech}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;