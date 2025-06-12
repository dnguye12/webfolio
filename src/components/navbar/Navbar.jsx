import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./components/NavbarLink";
import { Separator } from "radix-ui";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import LangSwitcher from "./components/LangSwitcher";

const Navbar = ({theme, toggleTheme}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav className="fixed bottom-[-8px] left-1/2 z-20 flex h-[58px] w-auto -translate-x-1/2 -translate-y-1/2 items-end rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-2 shadow-lg">
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
          href={"/about-me"}
          tip={"About me"}
          icon={<FontAwesomeIcon icon="fa-solid fa-user" />}
        />
        <Separator.Root
          orientation="vertical"
          decorative={true}
          className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
        />
        <NavbarLink
          href={"mailto:duchuyng051@gmail.com"}
          tip={"Mail"}
          icon={<FontAwesomeIcon icon="fa-solid fa-envelope" />}
          newTab={true}
        />
        <NavbarLink
          href={"https://github.com/dnguye12"}
          tip={"Github"}
          icon={<FontAwesomeIcon icon="fa-brands fa-github" />}
          newTab={true}
        />
        <NavbarLink
          href={"https://www.linkedin.com/in/duc-huy-nguyen-9392461bb/"}
          tip={"Linkedin"}
          icon={<FontAwesomeIcon icon="fa-brands fa-linkedin-in" />}
          newTab={true}
        />
        <NavbarLink
          href={"http://discord.com/users/589583302890094600"}
          tip={"Discord"}
          icon={<FontAwesomeIcon icon="fa-brands fa-discord" />}
          newTab={true}
        />
        <Separator.Root
          orientation="vertical"
          decorative={true}
          className="SeparatorRoot bg-neutral-200 dark:bg-neutral-700"
        />
        <button onClick={toggleTheme} className="nav-link group relative" aria-label="Toggle theme">
          {theme === "light" ? (
            <span className="text-2xl">⚫</span>
          ) : (
            <span className="text-2xl">☀️</span>
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
          {isAudioPlaying ? (
            <FontAwesomeIcon icon="fa-solid fa-volume-xmark" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-volume-high" />
          )}
          <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
            Background music
          </div>
        </button>
        <LangSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
