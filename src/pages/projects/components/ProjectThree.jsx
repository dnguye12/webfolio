import { useState } from "react";
import { myProjects } from "../../../../constants";


const ProjectThree = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const projectCount = myProjects.length

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    }

    return (
        <div className=" grid lg:grid-cols-2 grid-cols-1 mt-16 gap-5 container mx-auto">
            <div className="flex flex-col gap-5 relative">
                <div className="">
                    <img
                        src={currentProject.imageUrl}
                        alt={`Image of ${currentProject.title}`}
                        fill
                        className="object-cover transition-transform duration-300 shadow-xl hover:scale-[1.02] rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-5 my-5">
                        <h2 className="text-black dark:text-white text-3xl font-bold animatedText">{currentProject.title}</h2>
                        <p className="text-lg text-neutral-700 text-start">{currentProject.summary}</p>
                    </div>

                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, idx) => (
                            <div key={idx} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                    </div>

                    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                        <p>Check Live Site</p>
                        <img src="/assets/arrow-up.png" className="w-3  h-3" alt="arrow" />
                    </a>
                </div>

                <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" />
                    </button>

                    <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default ProjectThree;