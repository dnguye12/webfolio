import { useState } from "react";


function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h2>
                <p className="text-xl mb-8">A passionate developer building web experiences.</p>
                <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">View My Work</a>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="container mx-auto px-6 py-16">
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-lg leading-relaxed">
                I am a web developer with a passion for creating beautiful and functional user experiences. With expertise in JavaScript, React, and Tailwind CSS, I strive to build responsive and accessible web applications.
            </p>
        </section>
    );
}

function ProjectCard({ title, description, link }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
            <p className="mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
        </div>
    );
}

function Projects() {
    const projects = [
        { title: 'Project One', description: 'Description for project one.', link: '#' },
        { title: 'Project Two', description: 'Description for project two.', link: '#' },
        { title: 'Project Three', description: 'Description for project three.', link: '#' },
    ];

    return (
        <section id="projects" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h3 className="text-3xl font-bold mb-6">Projects</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, index) => (
                        <ProjectCard key={index} title={proj.title} description={proj.description} link={proj.link} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <section id="contact" className="container mx-auto px-6 py-16">
            <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
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

export default App