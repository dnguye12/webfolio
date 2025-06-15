import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import { Separator } from "radix-ui";
import Skills from "./components/Skills";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const location = useLocation()
    const {t, i18n} = useTranslation("common")

    useEffect(() => {

        if (location.hash) {
            const id = location.hash.replace("#", "")

            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [location])

    return (
        <div className=" bg-neutral-100 dark:bg-neutral-900 transition-all w-screen overflow-x-hidden">
            <Hero t={t}/>
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
            <About t={t}/>
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
            <Experience/>
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
            <Skills t={t} i18n={i18n}/>
            <Separator.Root
                orientation="horizontal"
                decorative={true}
                className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
            />
        </div>
    );
}

export default AboutMe;