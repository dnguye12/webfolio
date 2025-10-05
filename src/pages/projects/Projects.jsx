import { useTranslation } from "react-i18next";
import { myProjects } from "../../../constants";
import SplitText from "../../components/react_bits/SplitText";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    const { t, i18n } = useTranslation("common")

    return (
        <div className=" bg-neutral-100 dark:bg-neutral-900 transition-all px-3">
            <section id="hero" className="relative flex flex-col items-start justify-center pt-8 lg:pt-20 container mx-auto">
                <div className=" flex flex-col items-center mb-8">
                    <SplitText
                        key={i18n.language}
                        text={t("my_projects")}
                        className="leading-wide font-semibold text-neutral-900 dark:text-neutral-100 transition-all text-4xl lg:text-6xl"
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

            <section className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12 mb-24 lg:mb-20">
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
                                slug={project.slug}
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
                                slug={project.slug}
                            />
                        )

                ))
                }
            </section>
        </div>
    );
}

export default Projects;