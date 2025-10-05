import { Link, useParams } from "react-router";
import { myProjects } from "../../../constants";
import { useTranslation } from "react-i18next";
import Button from "../../components/shadcn/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../../components/shadcn/Badge";
import EmblaCarousel from "../../components/embla/EmblaCarousel";
import { useState } from "react";
import { useEffect } from "react";
import ImageModal from "./components/ImageModal";

const ProjectPage = () => {
    const { slug } = useParams()
    const { t, i18n } = useTranslation("common")
    const [currentImage, setCurrentImage] = useState("")
    const [open, setOpen] = useState(false)

    const project = myProjects.find(p => p.slug === slug)

    useEffect(() => {
        if (project) {
            setCurrentImage(project.imageUrl)
        }
    }, [project])

    if (!project) {
        return <div>...Loading</div>
    }

    const desc = i18n.language === "fr" ? project.page_desc_fr : project.page_desc_en

    const OPTIONS = { loop: true }
    const SLIDES = [project.imageUrl, ...project.images]

    return (
        <div className=" bg-neutral-100 dark:bg-neutral-900 transition-all">
            <section className="relative flex flex-col items-start justify-center pt-8 lg:pt-20 pb-20 container max-w-5xl mx-auto px-3">
                <Link to="/projects">
                    <Button className={"mb-6 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"}>
                        <FontAwesomeIcon icon="fa-solid fa-caret-left" className="mr-1" />{t("back_projects")}
                    </Button>
                </Link>
                <div className=" space-y-6">
                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-semibold text-neutral-900 dark:text-white">{i18n.language === "fr" ? project.title_fr : project.title_en}</div>
                        <div className="font-medium text-base text-neutral-700 dark:text-neutral-400">{i18n.language === "fr" ? project.summary_fr : project.summary_en}</div>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                        {
                            project.liveUrl && (
                                <Button className={"bg-neutral-900 text-white hover:bg-neutral-900/80 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-100/80"}>
                                    <a href={project.liveUrl} target="_blank" >{t("visit_website")}<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className="ml-1" /></a>
                                </Button>
                            )
                        }
                        {
                            project.sourceCodeUrl && (
                                <Button className={"bg-neutral-900 text-white hover:bg-neutral-900/80 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-100/80"}>
                                    <a href={project.sourceCodeUrl} target="_blank" >Github<FontAwesomeIcon icon="fa-brands fa-github" className="ml-1" /></a>
                                </Button>
                            )
                        }
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <Badge text={tag} classes={"!text-sm !px-3 !py-1 bg-neutral-800 text-neutral-100"} />
                        ))}
                    </div>
                </div>
                <div>
                    {currentImage && (
                        <>
                            <img
                                src={currentImage}
                                alt={`Image of ${project.title_en}`}
                                className="my-6 aspect-video h-auto w-full rounded-lg object-cover drop-shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
                                onClick={() => setOpen(true)}
                            />

                            <ImageModal
                                src={currentImage}
                                alt={`Image of ${project.title_en}`}
                                open={open}
                                onClose={() => setOpen(false)}
                            />
                        </>
                    )}
                    {SLIDES.length > 1 && (
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} setCurrentImage={setCurrentImage} />
                    )}
                    <div className="my-6 project-desc" dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
                <Link to="/projects">
                    <Button className={"mb-6 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"}>
                        <FontAwesomeIcon icon="fa-solid fa-caret-left" className="mr-1" />{t("back_projects")}
                    </Button>
                </Link>
            </section>
        </div>
    );
}

export default ProjectPage;