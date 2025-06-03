import useHomeScale from "../../hooks/useHomeScale"
import HomeGrid from "./components/HomeGrid"

const Home = () => {
    const CELL_COUNT = 900

    const cells = Array.from({ length: CELL_COUNT }).map((_, idx) => (
        <HomeGrid key={`grid-${idx}`} />
    ))

    const scale = useHomeScale()

    return (
        <main className=" flex flex-col min-h-screen overflow-hidden my-0 mx-auto">
            <div className="h-screen cursor-grab touch-none">
                <div
                    style={{
                        transform: ` translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(2) scale(${scale}) `
                    }}
                    className="grid fixed top-1/2 left-1/2 will-change-transform transition-opacity duration-300 grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)]">
                    {cells}
                </div>
            </div>
        </main>
    )
}

export default Home