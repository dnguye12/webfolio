import TextReveal from "@/components/motion/text-reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const AboutMe = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-4xl lg:text-2xl font-semibold  mb-6 text-center">😁 About Me</h2>
                    <Avatar className="w-40 h-40 mx-auto drop-shadow-md">
                        <AvatarImage src="./profile_cover.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-semibold  mt-6 text-center">Nguyen Duc Huy</h2>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <div className="space-y-8 px-8 lg:px-0">
                        <TextReveal
                            as="h3"
                            className="font-semibold text-3xl tracking-wide sm:text-4xl md:text-4xl"
                        >
                            I create captivating designs by blending aesthetics, motion, and technology.
                        </TextReveal>
                        <TextReveal
                            as="p"
                            className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-lg"
                        >
                            I am currently a student in Master 1 Human Computer Interaction in Paris Saclay University.
                            My passion for computer science and designing naturally guides me toward the field of
                            interaction, graphic and design, where I am able to combine my curiosity in
                            programming with my creativity.
                        </TextReveal>
                        <Button asChild variant={'outline'} className="w-full lg:w-fit">
                            <a href="resume.pdf" target="_blank">
                                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;