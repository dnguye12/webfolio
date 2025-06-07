import About from "./components/About";
import Hero from "./components/Hero";
import { Separator } from "radix-ui";

const AboutMe = () => {
    return (
        <div className=" bg-neutral-100 dark:bg-neutral-900 transition-all">
            <Hero />
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
            <About/>
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
        </div>
    );
}

export default AboutMe;