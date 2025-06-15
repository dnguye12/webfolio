import { GradientCard } from "../../../components/eldoraui/gradientcard";
import SplitText from "../../../components/react_bits/SplitText";

const Skills = ({ t, i18n }) => {
    return (
        <section className="relative flex flex-col items-start justify-center my-[calc(clamp(5em,21vh,12em)*.5)] px-4 md:px-6 container mx-auto bg-neutral-100 dark:bg-neutral-900 transition-all">
            <div className=" flex flex-col items-start">
                <SplitText
                key={i18n.language}
                    text={t("Skills")}
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
                        description={t("skill_1")}
                        icon="fa-solid fa-globe"
                    />
                    <GradientCard
                        className="p-4"
                        title="UX/UI"
                        description={t("skill_2")}
                        icon="fa-solid fa-palette"
                    />
                    <GradientCard
                        className="p-4"
                        title="Backend"
                        description={t("skill_3")}
                        icon="fa-solid fa-gears"
                    />
                    <GradientCard
                        className="p-4"
                        description={t("skill_4")}
                        title="Motion"
                        icon={"fa-solid fa-wand-magic-sparkles"}
                    />
                    <GradientCard
                        className="p-4"
                        description={t("skill_5")}
                        title="Soft Skill"
                        icon={"fa-solid fa-masks-theater"}
                    />
                </div>
                <div className="grid xl:hidden grid-cols-1 md:grid-cols-2 w-full gap-4 mb-4">
                    <GradientCard
                        className="p-4"
                        title="Web"
                        description={t("skill_1")}
                        icon="fa-solid fa-globe"
                    />
                    <GradientCard
                        className="p-4"
                        title="Backend"
                        description={t("skill_2")}
                        icon="fa-solid fa-gears"
                    />
                </div>
                <div className="grid xl:hidden grid-cols-1 md:grid-cols-3 w-full gap-4 mb-16">
                    <GradientCard
                        className="p-4"
                        title="UX/UI"
                        description={t("skill_3")}
                        icon="fa-solid fa-palette"
                    />
                    <GradientCard
                        className="p-4"
                        description={t("skill_4")}
                        title="Motion"
                        icon={"fa-solid fa-wand-magic-sparkles"}
                    />
                    <GradientCard
                        className="p-4"
                        description={t("skill_5")}
                        title="Soft Skill"
                        icon={"fa-solid fa-masks-theater"}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8 px-4 md:px-0">
                    <div className="col-span-1 md:col-span-2">
                        <SplitText
                        key={i18n.language}
                            text={t("skill_more_detail")}
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
                                    <th className="w-[150px] sm:w-[250px]">{t("table_categories")}</th>
                                    <th>{t("table_technologies")}</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:!border-0">
                                <tr>
                                    <th>{t("category_frontend")}</th>
                                    <td>React, Tailwind, NextJS, ThreeJS, Bootstrap, HTML, CSS</td>
                                </tr>
                                <tr>
                                    <th>{t("category_backend")}</th>
                                    <td>NodeJS, ExpressJS, NextJS, JavaScript, PHP, Python</td>
                                </tr>
                                <tr>
                                    <th>{t("category_databases")}</th>
                                    <td>MongoDB, Mongoose, Convex, Prisma, MySQL</td>
                                </tr>
                                <tr>
                                    <th>{t("category_general")}</th>
                                    <td>Java, C++, Python, C#, JavaScript</td>
                                </tr>
                                <tr>
                                    <th>{t("category_tools")}</th>
                                    <td>Git, Axure, Postman</td>
                                </tr>
                                <tr>
                                    <th>{t("category_design")}</th>
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