import moment from "moment"
import useHomeScale from "../../hooks/useHomeScale"
import HomeGrid from "./components/HomeGrid"
import { useState } from "react"
import { useEffect } from "react"

const Home = () => {
    const [currentTime, setCurrentTime] = useState("00:00:00")
    const CELL_COUNT = 900

    const cells = Array.from({ length: CELL_COUNT }).map((_, idx) => (
        <HomeGrid key={`grid-${idx}`} />
    ))

    const scale = useHomeScale()

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(moment().format("hh:mm:ss"))
        }, 1000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    return (
        <main className=" flex flex-col min-h-screen overflow-hidden my-0 mx-auto relative">
            <div id="homeOverlay" className="absolute z-10 top-0 left-0 w-screen h-screen"></div>
            <div className="h-screen cursor-grab touch-none z-0">
                <div
                    style={{
                        transform: ` translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) `
                    }}
                    className="grid fixed top-1/2 left-1/2 will-change-transform transition-opacity duration-300 grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)]">
                    {cells}
                </div>
            </div>
            <div className="relative z-20">
                <div className=" fixed top-8 left-8 text-sm text-neutral-700 font-mono ">{currentTime}</div>
            </div>
        </main>
    )
}

export default Home