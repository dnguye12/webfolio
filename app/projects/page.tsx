import SmoothScroll from "@/components/smooth-scroll";
import Header from "./components/header";
import Footer from "../about/components/footer";
import TextReveal from "@/components/motion/text-reveal";
import Line from "@/components/motion/line";
import projects from "@/data/projects";
import ProjectCard from "./components/project-card";

const ProjectPage = () => {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col z-40">
                <Header />
                <main className="flex-1 drop-shadow-md">
                    <section
                        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
                        id="hero"
                    >
                        <div className="flex flex-col items-center md:max-w-7xl">
                            <TextReveal
                                as="h1"
                                className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                            >
                                ⚙️ My Projects
                            </TextReveal>

                            <Line className={'mt-4'} />
                        </div>
                    </section>
                    <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                            key={project.id}
                                title={project.title}
                                imageUrl={project.imageUrl}
                                description={project.description}
                                summary={project.summary}
                                tags={project.tags}
                                features={project.features}
                                techStack={project.techStack}
                                liveUrl={project.liveUrl}
                                sourceCodeUrl={project.sourceCodeUrl}
                            />
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default ProjectPage;