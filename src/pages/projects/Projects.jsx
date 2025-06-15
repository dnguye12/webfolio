import { useTranslation } from "react-i18next";
import { myProjects } from "../../../constants";
import SplitText from "../../components/react_bits/SplitText";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    const { t, i18n } = useTranslation("common")

    console.log(i18n.language)
    return (
        <div className=" bg-neutral-100 dark:bg-neutral-900 transition-all">
            <section id="hero" className="relative flex flex-col items-start justify-center pt-[calc(clamp(5em,21vh,12em)*.5)] container mx-auto">
                <div className=" flex flex-col items-center mb-8">
                    <SplitText
                        key={i18n.language}
                        text={t("my_projects")}
                        className="leading-wide font-semibold text-neutral-900 dark:text-neutral-100 transition-all text-[calc(clamp(3.25em,7vw,8em)*.5)]"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <p className="text-lg lg:text-xl font-medium text-neutral-700 dark:text-neutral-400 tracking-tight">{t("my_projects_desc")}</p>
                </div>
            </section>

            <section className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12 mb-[calc(clamp(5em,21vh,12em)*.5)]">
                {myProjects.map((project) => (
                    i18n.language === "fr"
                        ?
                        (
                            <ProjectCard
                                key={project.id}
                                title={project.title_fr}
                                imageUrl={project.imageUrl}
                                description={project.description_fr}
                                summary={project.summary_fr}
                                tags={project.tags}
                                features={project.features_fr}
                                techStack={project.techStack_fr}
                                liveUrl={project.liveUrl}
                                sourceCodeUrl={project.sourceCodeUrl}
                            />
                        )
                        :
                        (
                            <ProjectCard
                                key={project.id}
                                title={project.title_en}
                                imageUrl={project.imageUrl}
                                description={project.description_en}
                                summary={project.summary_en}
                                tags={project.tags}
                                features={project.features_en}
                                techStack={project.techStack_en}
                                liveUrl={project.liveUrl}
                                sourceCodeUrl={project.sourceCodeUrl}
                            />
                        )

                ))
                }
            </section>
        </div>
    );
}

export default Projects;