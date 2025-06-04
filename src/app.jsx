import { useState } from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold">Hello, I'm John Doe</h2>
        <p className="mb-8 text-xl">
          A passionate developer building web experiences.
        </p>
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <h3 className="mb-6 text-3xl font-bold">About Me</h3>
      <p className="text-lg leading-relaxed">
        I am a web developer with a passion for creating beautiful and
        functional user experiences. With expertise in JavaScript, React, and
        Tailwind CSS, I strive to build responsive and accessible web
        applications.
      </p>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h4 className="mb-2 text-2xl font-semibold">{title}</h4>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Description for project one.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h3 className="mb-6 text-3xl font-bold">Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              link={proj.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    );
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h3 className="mb-6 text-3xl font-bold">Contact Me</h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg bg-white p-6 shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} John Doe. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
