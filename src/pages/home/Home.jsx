import { useState } from "react";
import { useEffect } from "react";
import useHomeScale from "../../hooks/useHomeScale";
import moment from "moment";

import HomeGrid from "./components/HomeGrid";

import "./home.css";
import { useTranslation } from "react-i18next";
import CharacterSVG from "./components/CharacterSVG";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamster from "./components/Hamster";


const Home = ({theme, toggleTheme}) => {
  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm:ss"));
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const CELL_COUNT = 900;

  const cells = Array.from({ length: CELL_COUNT }).map((_, idx) => (
    <HomeGrid key={`grid-${idx}`} />
  ));

  const scale = useHomeScale();

  const { t } = useTranslation("common");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(moment().format("hh:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-screen w-screen homeOverlay transition-all duration-[1000ms]"></div>
      <div className="z-0 h-screen cursor-grab touch-none bg-neutral-100 dark:bg-neutral-900 transition-all duration-[1000ms]">
        <div
          style={{
            transform: ` translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) `,
          }}
          className="fixed left-1/2 top-1/2 grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] transition-opacity duration-300 will-change-transform"
        >
          <div className=" absolute z-20 flex flex-col items-center"
            style={{
              gridColumn: "12",
              gridRow: "11",
            }}
          >
            <p className="text-xl mb-2 font-semibold text-neutral-900 dark:text-neutral-100">{t("home_dark_mode")}</p>
            <label className="switch">
              <input className="cb" type="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
              <span className="toggle">
                <span className="left">off</span>
                <span className="right">on</span>
              </span>
            </label>
          </div>
          <div className=" absolute z-20 flex flex-col items-center"
            style={{
              gridColumn: "17",
              gridRow: "11",
            }}
          >
            <p className="text-xl mb-2 font-semibold text-neutral-900 dark:text-neutral-100">{t("home_powered_by")}</p>
            <Hamster />
          </div>
          <div className=" absolute z-20 "
            style={{
              gridColumn: "12",
              gridRow: "20",
            }}
          >
            <Link to="/projects" id="HomeAboutMe" className=" bg-neutral-900 dark:bg-neutral-100">
              <span className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-[0_0.4em_0.1em_0.019em_#fff] dark:shadow-[0_0.4em_0.1em_0.019em_#000]"><FontAwesomeIcon icon="fa-solid fa-computer" className="mr-2" /> {t("Projects")}</span>
            </Link>
          </div>
          <div className=" absolute z-20 "
            style={{
              gridColumn: "15",
              gridRow: "20",
            }}
          >
            <Link to="/about-me" id="HomeAboutMe" className=" bg-neutral-900 dark:bg-neutral-100">

              <span className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-[0_0.4em_0.1em_0.019em_#fff] dark:shadow-[0_0.4em_0.1em_0.019em_#000]"><FontAwesomeIcon icon="fa-solid fa-user" className="mr-2" /> {t("About_Me")}</span>
            </Link>
          </div>
          <CharacterSVG
            char={"D"}
            style={{
              "--delay": "800ms",
              gridColumn: "10 / 11",
              gridRow: "14 / span 1",
            }}
            x="50%"
          />
          <CharacterSVG
            char={"U"}
            style={{
              "--delay": "900ms",
              gridColumn: "12 / 13",
              gridRow: "16 / span 1",
            }}
            x="65%"
          />
          <CharacterSVG
            char={"C"}
            style={{
              "--delay": "1000ms",
              gridColumn: "14 / 15",
              gridRow: "14 / span 1",
            }}
            x="50%"
          />
          <CharacterSVG
            char={"H"}
            style={{
              "--delay": "1100ms",
              gridColumn: "17 / 18",
              gridRow: "14 / span 1",
            }}
            x="50%"
          />
          <CharacterSVG
            char={"U"}
            style={{
              "--delay": "1200ms",
              gridColumn: "19 / 20",
              gridRow: "16 / span 1",
            }}
            x="65%"
          />
          <CharacterSVG
            char={"Y"}
            style={{
              "--delay": "1300ms",
              gridColumn: "21 / 22",
              gridRow: "14 / span 1",
            }}
            x="50%"
          />
          {cells}
        </div>
      </div>
      <div className="relative z-20">
        <div className="fixed left-8 top-8 font-mono text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-[1000ms] inline-flex items-center h-10">
          {currentTime}
        </div>
        <div className="fixed bottom-8 left-8 font-mono text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-[1000ms]">
          {width}x{height}
        </div>
        <div className="fixed bottom-8 right-8 font-mono text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-[1000ms]">
          Nguyen Duc Huy
        </div>
        <div className="fixed right-8 top-8 font-mono text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-[1000ms] inline-flex items-center h-10">
          <span className="waving-hand text-4xl">👋</span> {t("home_welcome")}
        </div>
      </div>
    </>
  );
};

export default Home;
