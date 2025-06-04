import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./NavbarLink";
import { Separator } from "radix-ui";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioRef = useRef(null);

  const toggleLightMode = () => {
    document.documentElement.classList.toggle("dark");
    setLightMode((prev) => !prev);
  };

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav className="fixed bottom-[-8px] left-1/2 z-20 flex h-[58px] w-auto -translate-x-1/2 -translate-y-1/2 items-end rounded-full border border-neutral-200 bg-neutral-50 px-2 shadow-lg">
      <div className="flex h-full w-full items-end gap-2 py-2">
        <NavbarLink
          href={"/"}
          tip={"Home"}
          icon={<FontAwesomeIcon icon="fa-solid fa-house-chimney" />}
        />
        <NavbarLink
          href={"/projects"}
          tip={"Projects"}
          icon={<FontAwesomeIcon icon="fa-solid fa-computer" />}
        />
        <NavbarLink
          href={"/experiences"}
          tip={"Experiences"}
          icon={<FontAwesomeIcon icon="fa-solid fa-calendar-days" />}
        />
        <NavbarLink
          href={"/about-me"}
          tip={"About me"}
          icon={<FontAwesomeIcon icon="fa-solid fa-user" />}
        />
        <Separator.Root
          orientation="vertical"
          decorative={true}
          className="SeparatorRoot bg-neutral-200"
        />
        <NavbarLink
          href={"/about-me"}
          tip={"About me"}
          icon={<FontAwesomeIcon icon="fa-solid fa-user" />}
        />
        <Separator.Root
          orientation="vertical"
          decorative={true}
          className="SeparatorRoot bg-neutral-200"
        />
        <button onClick={toggleLightMode} className="nav-link group relative">
          {lightMode ? (
            <FontAwesomeIcon icon="fa-solid fa-moon" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-sun" />
          )}
          <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
            Toggle theme
          </div>
        </button>
        <button
          onClick={toggleAudioIndicator}
          className="nav-link group relative"
        >
          <audio ref={audioRef} className="hidden" src="/audio/loop.mp3" loop />
          {isIndicatorActive ? (
            <FontAwesomeIcon icon="fa-solid fa-volume-xmark" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-volume-high" />
          )}
          <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
            Background music
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
