import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects"
import AboutMe from "./pages/about_me/AboutMe"
import Navbar from "./components/navbar/Navbar";
import useTheme from "./hooks/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <main className="relative mx-auto my-0 flex min-h-screen flex-col overflow-hidden">
            <Routes>
                <Route index element={<Home theme={theme} toggleTheme={toggleTheme}/>}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
            </Routes>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
        </main>
    );
}

export default App;