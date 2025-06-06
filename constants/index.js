export const myProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      imageUrl: "/projects/port.png",
      description: "A personal portfolio website showcasing my technical skills, professional experience, and creative projects in a highly interactive and visually appealing way. The site features advanced animations, clean layouts, and responsive designs to ensure an optimal user experience across devices.",
      summary:
        "This portfolio website serves as a central hub for my professional and personal projects, highlighting my technical skills, design sense, and creativity...",
      tags: ["React", "TailwindCSS", "ShadCN", "ThreeJS"],
      features: [
        "3D animations",
        "Smooth motions and transitions",
        "Interactive graphics",
      ],
      techStack: {
        frontend: "React for building dynamic and responsive user interfaces.",
        styling: "TailwindCSS and ShadCN for sleek and user-friendly designs.",
        "3D": "3D animations and smooth motions.",
      },
      liveUrl: "https://webfolio-smoky.vercel.app/",
      sourceCodeUrl: "https://github.com/dnguye12/webfolio",
    },
    {
      id: 2,
      title: "Dividend Insight (Ongoing)",
      imageUrl: "/projects/div.png",
      description: "A full-stack web application designed to provide investors with real-time company stock information, detailed feedback, price estimations, and comprehensive analysis. The platform integrates AI-powered algorithms, web scraping technology, and interactive data visualizations to deliver actionable insights tailored to user preferences.",
      summary:
        "A comprehensive stock analysis platform that leverages web scraping, data science, and AI to deliver accurate and actionable financial insights...",
      tags: ["React", "ExpressJS", "MongoDB", "Puppeteer"],
      features: [
        "Data scraping from Yahoo Finance",
        "Advanced algorithms for stock performance analysis",
        "AI agent integration",
        "Interactive data visualization for users",
      ],
      techStack: {
        frontend: "React for creating intuitive user interfaces.",
        backend: "Express.js for server-side logic and routing.",
        database: "MongoDB for storing stock data and user feedback.",
        scraping: "Puppeteer for automated data collection from external sources.",
        hosting: "Deployed on a scalable cloud platform.",
      },
      liveUrl: "",
      sourceCodeUrl: "",
    },
    {
      id: 3,
      title: "Fullstack Miro Copy",
      imageUrl: "/projects/miro.png",
      description: "A real-time collaborative application inspired by Miro, offering teams the ability to visually collaborate using shared whiteboards. The platform includes advanced drawing tools, text editing capabilities, and separate collaboration rooms, making it an essential tool for brainstorming and planning sessions.",
      summary:
        "A highly interactive platform inspired by Miro, designed to enable teams to collaborate visually and in real-time using whiteboards...",
      tags: ["NextJS", "Convex", "Clerk", "TailwindCSS", "ShadCN"],
      features: [
        "Freehand drawing",
        "Text, shapes, and collaborative tools",
        "User authentication",
        "Separate rooms for collaboration",
      ],
      techStack: {
        frontend: "Next.js for SSR and responsive UI.",
        backend: "Convex for real-time data synchronization.",
        authentication: "Clerk for secure user authentication.",
        styling: "TailwindCSS and ShadCN for a modern design.",
        hosting: "Deployed on Vercel for fast and reliable access.",
      },
      liveUrl: "https://miro-clone-liard.vercel.app/",
      sourceCodeUrl: "https://github.com/dnguye12/Miro-Clone",
    },
    {
      id: 4,
      title: "Fullstack Discord Copy",
      imageUrl: "/projects/discord.png",
      description:
        "A fully functional Discord clone built to offer communities a powerful communication platform with features such as real-time messaging, video and audio calls, and isolated servers or channels. This project mimics the core functionality of Discord with additional improvements in usability and design.",
      summary:
        "A feature-rich clone of Discord, offering seamless communication for communities through text, voice, and video...",
      tags: ["React", "ExpressJS", "MongoDB", "TailwindCSS"],
      features: [
        "Real-time messaging",
        "File/image uploads (including large files)",
        "Server/channel management",
        "Video and audio calls",
      ],
      techStack: {
        frontend: "React for interactive and real-time UI.",
        backend: "Express.js for handling server-side APIs.",
        database: "MongoDB for managing messages, users, and servers.",
        styling: "TailwindCSS for responsive and clean design.",
        hosting: "Deployed on Render for backend and Netlify for frontend.",
      },
      liveUrl: "https://discord-backend-tlyr.onrender.com/",
      sourceCodeUrl: "https://github.com/dnguye12/Discord-Backend",
    },
    {
      id: 5,
      title: "Increment Paradise",
      imageUrl: "/projects/para.png",
      description:
        "A specialized e-commerce platform built for a Minecraft server, providing users with the ability to purchase ranks, upgrades, and special in-game items. The platform integrates with the Minecraft server in real-time to ensure a seamless and dynamic shopping experience.",
      summary:
        "A robust e-commerce platform tailored for a Minecraft community, enabling users to buy in-game items and manage purchases...",
      tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
      features: [
        "Admin panel to manage website and products",
        "Login system for players",
        "Dynamic offers based on purchase history",
        "Databases to hold information on users and products",
        "Real-time updates synced with the Minecraft server",
      ],
      techStack: {
        frontend: "HTML, CSS, and JavaScript for building a responsive UI.",
        backend: "Custom server logic integrated with MongoDB.",
        database: "MongoDB for storing user data and product inventory.",
        hosting: "Deployed on a custom hosting solution with real-time integration to the Minecraft server.",
      },
      liveUrl: "https://shop.incrementalparadise.com/",
      sourceCodeUrl: "",
    },
    {
      id: 6,
      title: "2048",
      imageUrl: "/projects/2048.png",
      description: "An engaging implementation of the 2048 puzzle game, designed with Java as my first programming project. This project showcases basic programming concepts, such as object-oriented programming, game logic, and keyboard interaction, making it an excellent learning experience.",
      summary:
        "A simple and fun implementation of the 2048 game, showcasing my early programming skills and passion for development...",
      tags: ["Java"],
      features: [
        "Classic 2048 gameplay",
        "Simple and intuitive design",
        "Keyboard controls",
      ],
      techStack: {
        language: "Java for core game logic and functionality.",
      },
      liveUrl: "",
      sourceCodeUrl: "https://github.com/dnguye12/projet-2048",
    },
  ];