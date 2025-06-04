import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./NavbarLink";
import { Separator } from "radix-ui";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [lightMode, setLightMode] = useState(true)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)

    const audioRef = useRef(null)

    const toggleLightMode = () => {
        document.documentElement.classList.toggle("dark")
        setLightMode((prev) => !prev)
    }

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
        if (isAudioPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isAudioPlaying])

    return (
        <nav className="flex items-end w-auto px-2 fixed bg-neutral-50 shadow-lg border border-neutral-200 bottom-[-8px] left-1/2 rounded-full z-20 -translate-x-1/2 -translate-y-1/2 h-[58px]">
            <div className=" flex items-end gap-2 w-full py-2 h-full">
                <NavbarLink href={"/"} tip={"Home"} icon={<FontAwesomeIcon icon="fa-solid fa-house-chimney" />} />
                <NavbarLink href={"/projects"} tip={"Projects"} icon={<FontAwesomeIcon icon="fa-solid fa-computer" />} />
                <NavbarLink href={"/experiences"} tip={"Experiences"} icon={<FontAwesomeIcon icon="fa-solid fa-calendar-days" />} />
                <NavbarLink href={"/about-me"} tip={"About me"} icon={<FontAwesomeIcon icon="fa-solid fa-user" />} />
                <Separator.Root orientation="vertical" decorative={true} className="SeparatorRoot bg-neutral-200" />
                <NavbarLink href={"/about-me"} tip={"About me"} icon={<FontAwesomeIcon icon="fa-solid fa-user" />} />
                <Separator.Root orientation="vertical" decorative={true} className="SeparatorRoot bg-neutral-200" />
                <button onClick={toggleLightMode} className="nav-link group relative">
                    {
                        lightMode
                            ?
                            (
                                <FontAwesomeIcon icon="fa-solid fa-moon" />
                            )
                            :
                            (
                                <FontAwesomeIcon icon="fa-solid fa-sun" />
                            )
                    }
                    <div className=" absolute -top-12 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-400 transition-all duration-300 drop-shadow-md border border-neutral-200 select-none whitespace-nowrap">Toggle theme</div>
                </button>
                <button onClick={toggleAudioIndicator} className="nav-link group relative">
                    <audio
                        ref={audioRef}
                        className="hidden"
                        src="/audio/loop.mp3"
                        loop
                    />
                    {
                        isIndicatorActive
                            ?
                            (
                                <FontAwesomeIcon icon="fa-solid fa-volume-xmark" />
                            )
                            :
                            (
                                <FontAwesomeIcon icon="fa-solid fa-volume-high" />
                            )
                    }
                    <div className=" absolute -top-12 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-400 transition-all duration-300 drop-shadow-md border border-neutral-200 select-none whitespace-nowrap">Background music</div>
                </button>
            </div>
        </nav>
    )
    
}

export default Navbar;