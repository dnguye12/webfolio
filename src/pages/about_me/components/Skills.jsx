import { GradientCard } from "../../../components/eldoraui/gradientcard";
import SplitText from "../../../components/react_bits/SplitText";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section className="relative flex flex-col items-start justify-center my-[calc(clamp(5em,21vh,12em)*.5)] px-4 md:px-6 container mx-auto bg-neutral-100 dark:bg-neutral-900 transition-all">
            <div className=" flex flex-col items-start">
                <SplitText
                    text="My Skills"
                    className="font-semibold text-neutral-900 dark:text-neutral-100 transition-all text-[calc(clamp(3.25em,7vw,8em)*.5)] -mt-8 mb-8"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="start"
                />

                <div className="hidden xl:grid grid-cols-5 gap-4 w-full mb-16">
                    <GradientCard
                        className="p-4"
                        title="Web"
                        description="I build responsive, high-performance web applications."
                        icon="fa-solid fa-globe"
                    />
                    <GradientCard
                        className="p-4"
                        title="UX/UI"
                        description="I craft intuitive interfaces and seamless experiences."
                        icon="fa-solid fa-palette"
                    />
                    <GradientCard
                        className="p-4"
                        title="Backend"
                        description="I architect scalable backend server and database solutions."
                        icon="fa-solid fa-gears"
                    />
                    <GradientCard
                        className="p-4"
                        description="I apply animations to make the experience more engaging."
                        title="Motion"
                        icon={"fa-solid fa-wand-magic-sparkles"}
                    />
                    <GradientCard
                        className="p-4"
                        description="I foster clear communication and teamwork."
                        title="Soft Skill"
                        icon={"fa-solid fa-masks-theater"}
                    />
                </div>
                <div className="grid xl:hidden grid-cols-1 md:grid-cols-2 w-full gap-4 mb-4">
                    <GradientCard
                        className="p-4"
                        title="Web"
                        description="I build responsive, high-performance web applications."
                        icon="fa-solid fa-globe"
                    />
                    <GradientCard
                        className="p-4"
                        title="Backend"
                        description="I architect scalable backend server and database solutions."
                        icon="fa-solid fa-gears"
                    />
                </div>
                <div className="grid xl:hidden grid-cols-1 md:grid-cols-3 w-full gap-4 mb-16">
                    <GradientCard
                        className="p-4"
                        title="UX/UI"
                        description="I craft intuitive interfaces and seamless experiences."
                        icon="fa-solid fa-palette"
                    />
                    <GradientCard
                        className="p-4"
                        description="I apply animations to make the experience more engaging."
                        title="Motion"
                        icon={"fa-solid fa-wand-magic-sparkles"}
                    />
                    <GradientCard
                        className="p-4"
                        description="I foster clear communication and teamwork."
                        title="Soft Skill"
                        icon={"fa-solid fa-masks-theater"}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8 px-4 md:px-0">
                    <div className="col-span-1 md:col-span-2">
                        <SplitText
                            text="or in more details..."
                            className="font-semibold text-neutral-900 dark:text-neutral-100 transition-all text-xl md:text-[calc(clamp(3.25em,7vw,8em)*.25)]"
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
                    <div className="col-span-1 lg:col-span-3 px-0">
                        <table id="skillTable" className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr>
                                    <th className="w-[150px] sm:w-[250px]">Categories</th>
                                    <th>Technologies</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:!border-0">
                                <tr>
                                    <th>Front-end Development</th>
                                    <td>React, Tailwind, NextJS, ThreeJS, Bootstrap, HTML, CSS</td>
                                </tr>
                                <tr>
                                    <th>Back-end Development</th>
                                    <td>NodeJS, ExpressJS, NextJS, JavaScript, PHP, Python</td>
                                </tr>
                                <tr>
                                    <th>Databases</th>
                                    <td>MongoDB, Mongoose, Convex, Prisma, MySQL</td>
                                </tr>
                                <tr>
                                    <th>General Programming</th>
                                    <td>Java, C++, Python, C#, JavaScript</td>
                                </tr>
                                <tr>
                                    <th>Other Programming Tools</th>
                                    <td>Git, Axure, Postman</td>
                                </tr>
                                <tr>
                                    <th>Design & Creative Tools</th>
                                    <td>Figma, Photoshop, Premiere Pro, After Effects, Blender, Fusion 360, Canva</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;