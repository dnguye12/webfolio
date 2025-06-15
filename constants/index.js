export const myProjects = [
  {
    id: 1,
    title_en: "Portfolio Website",
    title_fr: "Site de portfolio",
    imageUrl: "/projects/port.png",
    description_en: "A personal portfolio website showcasing my technical skills, professional experience, and creative projects in a highly interactive and visually appealing way. The site features advanced animations, clean layouts, and responsive designs to ensure an optimal user experience across devices.",
    description_fr: "Un site de portfolio personnel présentant mes compétences techniques, mon expérience professionnelle et mes projets créatifs de manière très interactive et visuellement attrayante. Le site propose des animations avancées, des mises en page épurées et des designs responsives pour garantir une expérience utilisateur optimale sur tous les appareils.",
    summary_en: "This portfolio website serves as a central hub for my professional and personal projects, highlighting my technical skills, design sense, and creativity...",
    summary_fr: "Ce site de portfolio sert de point central pour mes projets professionnels et personnels, mettant en valeur mes compétences techniques, mon sens du design et ma créativité...",
    tags: ["React", "TailwindCSS", "ShadCN", "ThreeJS"],
    features_en: ["3D animations", "Smooth motions and transitions", "Interactive graphics"],
    features_fr: ["Animations 3D", "Mouvements et transitions fluides", "Graphiques interactifs"],
    techStack_en: {
      frontend: "React for building dynamic and responsive user interfaces.",
      styling: "TailwindCSS and ShadCN for sleek and user-friendly designs.",
      "3D": "3D animations and smooth motions."
    },
    techStack_fr: {
      frontend: "React pour construire des interfaces utilisateur dynamiques et responsives.",
      styling: "TailwindCSS et ShadCN pour des designs élégants et conviviaux.",
      "3D": "Animations 3D et mouvements fluides."
    },
    liveUrl: "https://webfolio-smoky.vercel.app/",
    sourceCodeUrl: "https://github.com/dnguye12/webfolio"
  },
  {
    id: 2,
    title_en: "Dividend Insight (Ongoing)",
    title_fr: "Analyse des dividendes (en cours)",
    imageUrl: "/projects/div.png",
    description_en: "A full-stack web application designed to provide investors with real-time company stock information, detailed feedback, price estimations, and comprehensive analysis. The platform integrates AI-powered algorithms, web scraping technology, and interactive data visualizations to deliver actionable insights tailored to user preferences.",
    description_fr: "Une application web full-stack conçue pour fournir aux investisseurs des informations boursières en temps réel, des retours détaillés, des estimations de prix et des analyses complètes. La plateforme intègre des algorithmes alimentés par l'IA, la technologie de web scraping et des visualisations de données interactives pour délivrer des informations exploitables adaptées aux préférences des utilisateurs.",
    summary_en: "A comprehensive stock analysis platform that leverages web scraping, data science, and AI to deliver accurate and actionable financial insights...",
    summary_fr: "Une plateforme d'analyse boursière complète qui exploite le web scraping, la data science et l'IA pour fournir des insights financiers précis et exploitables...",
    tags: ["React", "ExpressJS", "MongoDB", "Puppeteer"],
    features_en: ["Data scraping from Yahoo Finance", "Advanced algorithms for stock performance analysis", "AI agent integration", "Interactive data visualization for users"],
    features_fr: ["Extraction de données depuis Yahoo Finance", "Algorithmes avancés pour l'analyse de la performance boursière", "Intégration d'agent IA", "Visualisation de données interactive pour les utilisateurs"],
    techStack_en: {
      frontend: "React for creating intuitive user interfaces.",
      backend: "Express.js for server-side logic and routing.",
      database: "MongoDB for storing stock data and user feedback.",
      scraping: "Puppeteer for automated data collection from external sources.",
      hosting: "Deployed on a scalable cloud platform."
    },
    techStack_fr: {
      frontend: "React pour créer des interfaces utilisateur intuitives.",
      backend: "Express.js pour la logique serveur et le routage.",
      database: "MongoDB pour stocker les données boursières et les retours utilisateurs.",
      scraping: "Puppeteer pour la collecte automatisée de données depuis des sources externes.",
      hosting: "Déployé sur une plateforme cloud évolutive."
    },
    liveUrl: "",
    sourceCodeUrl: ""
  },
  {
    id: 3,
    title_en: "Fullstack Miro Copy",
    title_fr: "Clone Fullstack de Miro",
    imageUrl: "/projects/miro.png",
    description_en: "A real-time collaborative application inspired by Miro, offering teams the ability to visually collaborate using shared whiteboards. The platform includes advanced drawing tools, text editing capabilities, and separate collaboration rooms, making it an essential tool for brainstorming and planning sessions.",
    description_fr: "Une application collaborative en temps réel inspirée de Miro, offrant aux équipes la possibilité de collaborer visuellement via des tableaux blancs partagés. La plateforme inclut des outils de dessin avancés, des capacités d'édition de texte et des salles de collaboration séparées, en faisant un outil essentiel pour les sessions de brainstorming et de planification.",
    summary_en: "A highly interactive platform inspired by Miro, designed to enable teams to collaborate visually and in real-time using whiteboards...",
    summary_fr: "Une plateforme hautement interactive inspirée de Miro, conçue pour permettre aux équipes de collaborer visuellement et en temps réel via des tableaux blancs...",
    tags: ["NextJS", "Convex", "Clerk", "TailwindCSS", "ShadCN"],
    features_en: ["Freehand drawing", "Text, shapes, and collaborative tools", "User authentication", "Separate rooms for collaboration"],
    features_fr: ["Dessin à main levée", "Outils de texte, formes et collaboration", "Authentification utilisateur", "Salles de collaboration séparées"],
    techStack_en: {
      frontend: "Next.js for SSR and responsive UI.",
      backend: "Convex for real-time data synchronization.",
      authentication: "Clerk for secure user authentication.",
      styling: "TailwindCSS and ShadCN for a modern design.",
      hosting: "Deployed on Vercel for fast and reliable access."
    },
    techStack_fr: {
      frontend: "Next.js pour le SSR et une interface responsive.",
      backend: "Convex pour la synchronisation de données en temps réel.",
      authentication: "Clerk pour une authentification utilisateur sécurisée.",
      styling: "TailwindCSS et ShadCN pour un design moderne.",
      hosting: "Déployé sur Vercel pour un accès rapide et fiable."
    },
    liveUrl: "https://miro-clone-liard.vercel.app/",
    sourceCodeUrl: "https://github.com/dnguye12/Miro-Clone"
  },
  {
    id: 4,
    title_en: "Fullstack Discord Copy",
    title_fr: "Clone Fullstack de Discord",
    imageUrl: "/projects/discord.png",
    description_en: "A fully functional Discord clone built to offer communities a powerful communication platform with features such as real-time messaging, video and audio calls, and isolated servers or channels. This project mimics the core functionality of Discord with additional improvements in usability and design.",
    description_fr: "Un clone fonctionnel de Discord construit pour offrir aux communautés une plateforme de communication puissante avec des fonctionnalités telles que la messagerie en temps réel, les appels vidéo et audio, et des serveurs ou canaux isolés. Ce projet imite la fonctionnalité principale de Discord avec des améliorations en termes d'utilisabilité et de design.",
    summary_en: "A feature-rich clone of Discord, offering seamless communication for communities through text, voice, and video...",
    summary_fr: "Un clone riche en fonctionnalités de Discord, offrant une communication fluide pour les communautés via texte, voix et vidéo...",
    tags: ["React", "ExpressJS", "MongoDB", "TailwindCSS"],
    features_en: ["Real-time messaging", "File/image uploads (including large files)", "Server/channel management", "Video and audio calls"],
    features_fr: ["Messagerie en temps réel", "Téléchargements de fichiers/images (y compris de grande taille)", "Gestion des serveurs/canaux", "Appels vidéo et audio"],
    techStack_en: {
      frontend: "React for interactive and real-time UI.",
      backend: "Express.js for handling server-side APIs.",
      database: "MongoDB for managing messages, users, and servers.",
      styling: "TailwindCSS for responsive and clean design.",
      hosting: "Deployed on Render for backend and Netlify for frontend."
    },
    techStack_fr: {
      frontend: "React pour une interface interactive et en temps réel.",
      backend: "Express.js pour gérer les API côté serveur.",
      database: "MongoDB pour gérer les messages, utilisateurs et serveurs.",
      styling: "TailwindCSS pour un design responsive et épuré.",
      hosting: "Déployé sur Render pour le backend et Netlify pour le frontend."
    },
    liveUrl: "https://discord-backend-tlyr.onrender.com/",
    sourceCodeUrl: "https://github.com/dnguye12/Discord-Backend"
  },
  {
    id: 5,
    title_en: "Increment Paradise",
    title_fr: "Increment Paradise",
    imageUrl: "/projects/para.png",
    description_en: "A specialized e-commerce platform built for a Minecraft server, providing users with the ability to purchase ranks, upgrades, and special in-game items. The platform integrates with the Minecraft server in real-time to ensure a seamless and dynamic shopping experience.",
    description_fr: "Une plateforme de commerce électronique spécialisée construite pour un serveur Minecraft, offrant aux utilisateurs la possibilité d'acheter des grades, des améliorations et des objets spéciaux en jeu. La plateforme s'intègre en temps réel avec le serveur Minecraft pour assurer une expérience d'achat fluide et dynamique.",
    summary_en: "A robust e-commerce platform tailored for a Minecraft community, enabling users to buy in-game items and manage purchases...",
    summary_fr: "Une plateforme e-commerce robuste adaptée à une communauté Minecraft, permettant aux utilisateurs d'acheter des objets en jeu et de gérer leurs achats...",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    features_en: ["Admin panel to manage website and products", "Login system for players", "Dynamic offers based on purchase history", "Databases to hold information on users and products", "Real-time updates synced with the Minecraft server"],
    features_fr: ["Panneau d'administration pour gérer le site et les produits", "Système de connexion pour les joueurs", "Offres dynamiques basées sur l'historique des achats", "Bases de données pour stocker les informations des utilisateurs et des produits", "Mises à jour en temps réel synchronisées avec le serveur Minecraft"],
    techStack_en: {
      frontend: "HTML, CSS, and JavaScript for building a responsive UI.",
      backend: "Custom server logic integrated with MongoDB.",
      database: "MongoDB for storing user data and product inventory.",
      hosting: "Deployed on a custom hosting solution with real-time integration to the Minecraft server."
    },
    techStack_fr: {
      frontend: "HTML, CSS et JavaScript pour créer une interface responsive.",
      backend: "Logique serveur personnalisée intégrée à MongoDB.",
      database: "MongoDB pour stocker les données utilisateurs et l'inventaire des produits.",
      hosting: "Déployé sur une solution d'hébergement personnalisée avec intégration en temps réel au serveur Minecraft."
    },
    liveUrl: "https://shop.incrementalparadise.com/",
    sourceCodeUrl: ""
  },
  {
    id: 6,
    title_en: "2048",
    title_fr: "2048",
    imageUrl: "/projects/2048.png",
    description_en: "An engaging implementation of the 2048 puzzle game, designed with Java as my first programming project. This project showcases basic programming concepts, such as object-oriented programming, game logic, and keyboard interaction, making it an excellent learning experience.",
    description_fr: "Une implémentation engageante du jeu puzzle 2048, conçue en Java comme mon premier projet de programmation. Ce projet met en valeur des concepts de programmation de base, tels que la programmation orientée objet, la logique du jeu et l'interaction clavier, en faisant une excellente expérience d'apprentissage.",
    summary_en: "A simple and fun implementation of the 2048 game, showcasing my early programming skills and passion for development...",
    summary_fr: "Une mise en œuvre simple et amusante du jeu 2048, montrant mes premières compétences en programmation et ma passion pour le développement...",
    tags: ["Java"],
    features_en: ["Classic 2048 gameplay", "Simple and intuitive design", "Keyboard controls"],
    features_fr: ["Gameplay classique de 2048", "Design simple et intuitif", "Contrôles au clavier"],
    techStack_en: {
      language: "Java for core game logic and functionality."
    },
    techStack_fr: {
      language: "Java pour la logique core du jeu et les fonctionnalités."
    },
    liveUrl: "",
    sourceCodeUrl: "https://github.com/dnguye12/projet-2048"
  }
];
