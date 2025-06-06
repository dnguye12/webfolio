import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./i18n.js";
import "./index.css";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import AboutMe from "./pages/about_me/AboutMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <main className="relative mx-auto my-0 flex min-h-screen flex-col overflow-hidden">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
        </Routes>
        <Navbar />
      </main>
    </BrowserRouter>
  </StrictMode>,
);
