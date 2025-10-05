import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects"
import AboutMe from "./pages/about_me/AboutMe"
import Navbar from "./components/navbar/Navbar";
import useTheme from "./hooks/useTheme";
import TransitionProvider from "./components/transition/TransitionProvider";
import "flag-icons/css/flag-icons.min.css";
import ProjectPage from "./pages/project/ProjectPage";

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <TransitionProvider>
            <h1 className=" sr-only">Nguyen Duc Huy. Freelancer Web developer.</h1>
            <main className="relative mx-auto my-0 flex min-h-screen flex-col">

                <Routes>
                    <Route index element={<Home theme={theme} toggleTheme={toggleTheme} />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/projects/:slug" element={<ProjectPage />}></Route> 
                    <Route path="/about-me" element={<AboutMe />}></Route>
                </Routes>
                <Navbar theme={theme} toggleTheme={toggleTheme} />

            </main>
        </TransitionProvider>
    );
}

export default App;