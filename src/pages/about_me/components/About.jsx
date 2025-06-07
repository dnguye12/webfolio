import { Integrations } from "../../../components/eldoraui/integrations";
import { CobeDraggableAuto } from "../../../components/eldoraui/cobeglobeautodraggable";
import ASCIIText from "../../../components/react_bits/ASCIIText";
import Folder from "../../../components/react_bits/Folder";

const About = () => {
    return (
        <section className="px-4 md:px-6 my-[calc(clamp(5em,21vh,12em)*.5)] container mx-auto" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3 group">
                    <div className="grid-container bg-neutral-200 dark:bg-[#CCD7D6] transition-all">
                        <img src="about/peeps.png" alt="grid-1" className="z-0 w-full sm:h-[276px] h-fit object-contain group-hover:scale-150 transition-all duration-300 drop-shadow-xl" />

                        <div className="z-10 bg-neutral-100 dark:bg-neutral-900 sm:p-6 p-4 transition-all">
                            <p className="grid-headtext text-neutral-900 dark:text-white transition-all">Hi, I’m Nguyen Duc Huy</p>
                            <p className="grid-subtext text-neutral-700 dark:text-neutral-400 transition-all">
                                I create captivating designs by blending aesthetics, motion, and technology.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container bg-neutral-200 dark:bg-neutral-900 transition-all relative justify-end">
                        <div className="block md:absolute w-full h-[276px] md:h-auto top-0">
                            <CobeDraggableAuto />
                        </div>

                        <div className=" z-10 bg-neutral-100 dark:bg-neutral-900 sm:p-6 p-4 transition-all">
                            <p className="grid-headtext text-neutral-900 dark:text-white transition-all">Flexible communications</p>
                            <p className="grid-subtext text-neutral-700 dark:text-neutral-400 transition-all">
                                I'm based in France and open to remote work worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container bg-neutral-200 dark:bg-neutral-900 transition-all relative justify-end">
                        <div className="rounded-3xl w-full h-[276px] flex justify-center items-center z-0">
                            <Integrations />
                        </div>
                        <div className=" z-10 bg-neutral-100 dark:bg-neutral-900 sm:p-6 p-4 transition-all" >
                            <p className="grid-headtext text-neutral-900 dark:text-white transition-all">Tech Stack</p>
                            <p className="grid-subtext text-neutral-700 dark:text-neutral-400 transition-all">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container bg-neutral-200 dark:bg-neutral-900 transition-all relative justify-end">
                        <div className="block xl:absolute top-0 w-full h-[276px] xl:h-4/5 grayscale dark:grayscale-0 transition-all">
                            <ASCIIText
                                text='Passion'
                                enableWaves={true}
                                asciiFontSize={8}
                            />
                        </div>

                        <div className=" z-10 bg-neutral-100 dark:bg-neutral-900 sm:p-6 p-4 transition-all" >
                            <p className="grid-headtext text-neutral-900 dark:text-white transition-all">My Passion for Coding</p>
                            <p className="grid-subtext text-neutral-700 dark:text-neutral-400 transition-all">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container bg-neutral-200 dark:bg-neutral-900 transition-all relative justify-end">
                        <a href="" target="_blank" className="w-full h-[276px] xl:h-full flex justify-center items-center dark:sm:pt-6 dark:pt-4 transition-all">
                            <Folder/>
                        </a>

                        <div className="z-10 bg-neutral-100 dark:bg-neutral-900 sm:p-6 p-4 transition-all">
                            <p className="grid-headtext text-neutral-900 dark:text-white transition-all">My resume</p>
                            <p className="grid-subtext text-neutral-700 dark:text-neutral-400 transition-all">Click the folder to view it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;