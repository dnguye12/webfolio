
import { useState } from "react";
import Badge from "../../../components/shadcn/Badge";
import Modal from 'react-modal';
import Button from "../../../components/shadcn/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ title, imageUrl, description, summary, tags, features, techStack, liveUrl, sourceCodeUrl }) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div onClick={openModal} className="relative flex h-full flex-col justify-between border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-50 dark:bg-neutral-900 drop-shadow-md cursor-pointer transition-all hover:scale-[1.02] dark:hover:bg-neutral-800 rounded-xl">
                <div className="p-4 md:p-6">
                    <div className="grid gap-2">
                        <div className="aspect-video z-[2] mb-2 inline-block overflow-hidden rounded-xl" >
                            <img src={imageUrl} alt={`Image of ${title}`} className="object-cover transition-transform duration-300 drop-shadow-xl" />
                        </div>

                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h2>
                        <p className="text-base text-neutral-700 dark:text-neutral-400 text-start">
                            {summary || description || ''}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags?.map((tag, index) => (
                                <Badge key={`project-tag-${index}`} text={tag} classes={"bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900"} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={title}
                className={"container bg-neutral-900 p-6 rounded-lg drop-shadow-md max-w-3xl lg:max-w-5xl xl:max-w-7xl max-h-[calc(100vh-4rem)] overflow-y-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
            >
                <div className=" space-y-6">
                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-semibold text-white">{title}</div>
                        <div className="font-medium text-base text-neutral-400">{summary}</div>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                        {
                            liveUrl && (
                                <Button className={"bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80"}>
                                    <a href={liveUrl} target="_blank" >Visit Website<FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className="ml-1" /></a>
                                </Button>
                            )
                        }
                        {
                            sourceCodeUrl && (
                                <Button className={"bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80"}>
                                    <a href={sourceCodeUrl} target="_blank" >Github<FontAwesomeIcon icon="fa-brands fa-github" className="ml-1" /></a>
                                </Button>
                            )
                        }
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags?.map((tag) => (
                            <Badge text={tag} classes={"!text-sm !px-3 !py-1 bg-neutral-800 text-neutral-100"} />
                        ))}
                    </div>
                </div>
                <div>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            width={1280}
                            height={832}
                            alt={`Image of ${title}`}
                            className="my-6 aspect-video h-auto w-full rounded-lg object-cover drop-shadow-md"
                        />
                    )}
                    <div>
                        <p className="text-white text-base font-medium mb-6">{description}</p>

                        <h4 className="text-white text-2xl font-semibold mb-2">Features</h4>
                        <ul className="list-disc mb-6">
                            {
                                features.map((f, i) => (
                                    <li key={`f-${i}`} className="text-white/80 text-base font-medium ml-6">{f}</li>
                                ))
                            }
                        </ul>

                        <h4 className="text-white text-2xl font-semibold mb-2">Tech Stack</h4>
                        <ul className="list-disc">
                            {
                                Object.entries(techStack).map(([k, v], i) => (
                                    <li key={`ts-${i}`} className="text-white/80 text-base font-medium ml-6">
                                        <b className="capitalize text-white font-semibold">{k} : </b>{v}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Modal >
        </>
    );
}

export default ProjectCard;