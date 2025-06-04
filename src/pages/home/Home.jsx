import { useState } from "react";
import { useEffect } from "react";
import useHomeScale from "../../hooks/useHomeScale";
import moment from "moment";

import HomeGrid from "./components/HomeGrid";

import "./home.css";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
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
    <main className="relative mx-auto my-0 flex min-h-screen flex-col overflow-hidden">
      <div
        id="homeOverlay"
        className="pointer-events-none absolute left-0 top-0 z-10 h-screen w-screen"
      ></div>
      <div className="z-0 h-screen cursor-grab touch-none">
        <div
          style={{
            transform: ` translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) `,
          }}
          className="fixed left-1/2 top-1/2 grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] transition-opacity duration-300 will-change-transform"
        >
          {cells}
        </div>
      </div>
      <Navbar />
      <div className="relative z-20">
        <div className="fixed left-8 top-8 font-mono text-sm text-neutral-700">
          {currentTime}
        </div>
        <div className="fixed bottom-8 left-8 font-mono text-sm text-neutral-700">
          {width}x{height}
        </div>
        <div className="fixed bottom-8 right-8 font-mono text-sm text-neutral-700">
          Nguyen Duc Huy
        </div>
        <div className="fixed right-8 top-8 font-mono text-sm text-neutral-700">
          <span className="waving-hand text-4xl">👋</span> {t("home_welcome")}
        </div>
      </div>
    </main>
  );
};

export default Home;
