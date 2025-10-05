export const myProjects = [
  {
    slug: "ai-web-gen",
    title_en: "AI Website Generator",
    title_fr: "Générateur de sites webs IA",
    imageUrl: "/projects/ai_web.png",
    summary_en: "Generate functional websites and their code using Artificial Intelligence.",
    summary_fr: "Générer des sites Web fonctionnels et leur code à l'aide de l'intelligence artificielle.",
    tags: ["AI", "NextJS", "PostgreSQL", "OpenAI", "Docker", "TRPC", "E2B"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
    A web application that uses OpenAI to generate complete websites from a single prompt.
    It not only renders the site in-browser, but also exposes the underlying code for the
    frontend, backend, and database layers.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>AI-driven website generation</li>
      <li>Authentication and subscription management</li>
      <li>E2B for isolated code execution and file system.</li>
      <li>View the full source for frontend, backend, and schema</li>
      <li>Modern, responsive UI</li>
    </ul>
    <br/>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>NextJS, TailwindCSS, ShadCN</li>
      <li><b>Backend : </b>NextJS, TRPC, E2B</li>
      <li><b>Database : </b>PostgreSQL, PrismaDB</li>
      <li><b>AI : </b>OpenAI</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
    <li>Incorporate AI in web applications to handle complex tasks</li>
    <li>Designing reliable multi-step agents: small, verifiable steps outperform a single large prompt.</li>
    <li>Subscription system for clients using Clerk</li>
    <li>Docker and E2B to create isolated code execution and preview</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Une application web qui utilise OpenAI pour générer des sites complets à partir d’un seul prompt.
      Elle n’affiche pas seulement le site dans le navigateur, mais expose également le code sous-jacent
      pour les couches frontend, backend et base de données.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Génération de sites web pilotée par l’IA</li>
      <li>Authentification et gestion des abonnements</li>
      <li>E2B pour l'exécution de code isolé et le système de fichiers.</li>
      <li>Accéder au code source complet du frontend, du backend et du schéma</li>
      <li>Interface moderne et responsive</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>NextJS, TailwindCSS, ShadCN</li>
      <li><b>Backend&nbsp;: </b>NextJS, TRPC, E2B</li>
      <li><b>Base de données&nbsp;: </b>PostgreSQL, PrismaDB</li>
      <li><b>IA&nbsp;: </b>OpenAI</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
    <li>Intégrer l'IA dans les applications web pour gérer des tâches complexes</li>
    <li>Concevoir des agents fiables en plusieurs étapes: des étapes simples et vérifiables sont plus performantes qu'une seule invite longue et complexe.</li>
    <li>Système d'abonnement pour les clients utilisant Clerk</li>
    <li>Docker et E2B pour créer une exécution et une prévisualisation de code isolées</li>
    </ul>
    `,
    images: ["https://i.ibb.co/jvqF83NK/0001.jpg",
      "https://i.ibb.co/5xFfwnbM/0003.jpg",
      "https://i.ibb.co/d4TMWPPV/0004.jpg",
      "https://i.ibb.co/CKMMyYTq/0005.jpg"],
    liveUrl: "https://ai-website-generator-three.vercel.app/",
    sourceCodeUrl: ""
  },
  {
    slug: "ai-image-gen",
    title_en: "AI Image Generator",
    title_fr: "Générateur d'images IA",
    imageUrl: "/projects/image_gen.png",
    summary_en: "Generate images using Artificial Intelligence and a prompt.",
    summary_fr: "Générer des images à l'aide de l'intelligence artificielle et d'un prompt",
    tags: ["AI", "React", "Node", "Express", "MongoDB", "Typescript", "TailwindCSS"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A full-stack application to create images from text prompts. Users can generate,
      browse, and share AI-generated images through a clean, modern interface.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Robust AI to generate images</li>
      <li>Database to store images</li>
      <li>Users can share images with each other</li>
      <li>Login system</li>
      <li>Beautiful and modern UI/UX</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React, TailwindCSS, ShadCN</li>
      <li><b>Backend : </b>Node, Express, TypeScript</li>
      <li><b>Database : </b>MongoDB</li>
      <li><b>Hosting : </b>Vercel</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Prompt engineering for controllable image generation</li>
      <li>Handling async jobs, queues, and API rate limits reliably</li>
      <li>Image storage, CDN delivery, and cache invalidation</li>
      <li>Designing infinite scroll and gallery pagination</li>
      <li>Auth and share flows with clean UX</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Une application full-stack pour créer des images à partir de prompts textuels.
      Les utilisateurs peuvent générer, parcourir et partager des images générées par l’IA
      via une interface moderne et soignée.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>IA robuste pour générer des images</li>
      <li>Base de données pour stocker les images</li>
      <li>Partage d’images entre utilisateurs</li>
      <li>Système d’authentification</li>
      <li>UI/UX élégante et moderne</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React, TailwindCSS, ShadCN</li>
      <li><b>Backend&nbsp;: </b>Node, Express, TypeScript</li>
      <li><b>Base de données&nbsp;: </b>MongoDB</li>
      <li><b>Hébergement&nbsp;: </b>Vercel</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
      <li>Engineering de prompts pour un rendu plus contrôlable</li>
      <li>Gestion fiable des tâches asynchrones, files et limites d’API</li>
      <li>Stockage des images, diffusion via CDN et invalidation de cache</li>
      <li>Conception d’une galerie avec pagination et défilement infini</li>
      <li>Parcours d’authentification et de partage avec une UX claire</li>
    </ul>
    `,
    images: ["https://i.ibb.co/5g6YgQRr/0001.jpg",
      "https://i.ibb.co/m5bvsRXn/0002.jpg",
      "https://i.ibb.co/fVQ3cwC5/0003.jpg",
      "https://i.ibb.co/cc8mWK6d/0004.jpg",
      "https://i.ibb.co/cSGchJJh/0005.jpg",
      "https://i.ibb.co/rRgBr8Xx/0006.jpg",],
    liveUrl: "https://ai-image-4n93.onrender.com/",
    sourceCodeUrl: ""
  },
  {
    slug: "discord-clone",
    title_en: "Discord Clone",
    title_fr: "Clone de Discord",
    imageUrl: "/projects/discord.png",
    summary_en: "A clone of Discord for a school project to learn about real time communication between users through messaging, images, audio and video call.",
    summary_fr: "Un clone de Discord réalisé pour un projet scolaire afin d’apprendre la communication en temps réel entre utilisateurs via la messagerie, les images et les appels audio/vidéo.",
    tags: ["React", "ExpressJS", "PostgreSQl", "Socket.io", "LiveKit"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A fully functional Discord clone built to offer communities a powerful communication platform with features such as real-time messaging, 
      video and audio calls, and isolated servers or channels. This project mimics the core functionality of Discord with additional improvements 
      in usability and design.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Real-time message with socket.io</li>
      <li>Audio and video call with LiveKit</li>
      <li>Images and files upload and sharing</li>
      <li>User can create custom server/group chat</li>
      <li>User roles (owner, moderator, normal) for each server that users can set</li>
      <li>Modern and responsive UI/UX</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React, TailwindCSS</li>
      <li><b>Backend : </b>Node, Express</li>
      <li><b>Database : </b>PostgreSQL</li>
      <li><b>Realtime communication : </b>Socket.io</li>
      <li><b>Audio, video communication : </b>LiveKit</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Real time communication</li>
      <li>Audio and video communication</li>
      <li>Image and files handling</li>
    </ul>
  `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Un clone de Discord entièrement fonctionnel, conçu pour offrir aux communautés une plateforme de communication puissante :
      messagerie en temps réel, appels audio et vidéo, et serveurs/canaux isolés. Le projet reprend les fonctionnalités
      essentielles de Discord tout en apportant des améliorations d’ergonomie et de design.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Messagerie en temps réel avec Socket.io</li>
      <li>Appels audio et vidéo avec LiveKit</li>
      <li>Téléversement et partage d’images et de fichiers</li>
      <li>Création de serveurs et salons de groupe personnalisés</li>
      <li>Rôles par serveur (propriétaire, modérateur, membre) configurables</li>
      <li>UI/UX moderne et responsive</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React, TailwindCSS</li>
      <li><b>Backend&nbsp;: </b>Node, Express</li>
      <li><b>Base de données&nbsp;: </b>PostgreSQL</li>
      <li><b>Communication en temps réel&nbsp;: </b>Socket.io</li>
      <li><b>Communication audio/vidéo&nbsp;: </b>LiveKit</li>
    </ul>
    <br/>
    <h2>Ce que j’ai appris</h2>
    <ul>
      <li>Communication en temps réel</li>
      <li>Communication audio et vidéo</li>
      <li>Gestion des images et des fichiers</li>
    </ul>
  `,
    images: [
      "https://i.ibb.co/Ng0kLnCC/01.jpg",
      "https://i.ibb.co/rRSy9fgh/02.jpg",
      "https://i.ibb.co/B2m6s7JJ/03.jpg",
      "https://i.ibb.co/d48tpmgs/04.jpg",
      "https://i.ibb.co/rKK76nww/05.jpg"
    ],
    liveUrl: "https://discord-backend-tlyr.onrender.com/",
    sourceCodeUrl: ""
  }
  ,
  {
    slug: "ai-cv-analyser",
    title_en: "AI Resume/CV Analyser",
    title_fr: "Analyseur de CV par IA",
    imageUrl: "/projects/ai_resume.png",
    summary_en: "Provide feedbacks on submitted CV/Resume using AI",
    summary_fr: "Fournir des retours sur un CV soumis grâce à l'IA",
    tags: ["AI", "React", "Node", "Express", "MongoDB", "Typescript", "TailwindCSS"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      An AI-powered tool that reviews uploaded CVs/resumes for content, structure, and readability.
      It highlights strengths, flags issues, and offers actionable tips for improvement.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Separate database for each user</li>
      <li>AI analysis of CV content</li>
      <li>AI Vision checks for style and readability</li>
      <li>Personalized improvement tips</li>
      <li>Modern user interface</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React, TailwindCSS, ShadCN</li>
      <li><b>Backend : </b>Node, Express, TypeScript</li>
      <li><b>Database : </b>MongoDB</li>
      <li><b>Hosting : </b>Vercel</li>
      <li><b>AI : </b>OpenAI</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Building robust PDF/text extraction pipelines for AI inputs</li>
      <li>Prompt chaining and evaluation to reduce hallucinations</li>
      <li>Designing feedback that is specific, ranked, and actionable</li>
      <li>Protecting PII: secure storage, redaction, and access control</li>
      <li>Background jobs and retries for longer analyses</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Un outil propulsé par l’IA qui analyse les CV pour le contenu, la structure et la lisibilité.
      Il met en avant les points forts, signale les problèmes et propose des conseils actionnables.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Base de données distincte par utilisateur</li>
      <li>Analyse IA du contenu du CV</li>
      <li>Vision par IA pour le style et la lisibilité</li>
      <li>Conseils d’amélioration personnalisés</li>
      <li>Interface utilisateur moderne</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React, TailwindCSS, ShadCN</li>
      <li><b>Backend&nbsp;: </b>Node, Express, TypeScript</li>
      <li><b>Base de données&nbsp;: </b>MongoDB</li>
      <li><b>Hébergement&nbsp;: </b>Vercel</li>
      <li><b>IA&nbsp;: </b>OpenAI</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
      <li>Mettre en place une extraction PDF/texte fiable pour l’entrée de l’IA</li>
      <li>Chaînage de prompts et évaluation pour réduire les hallucinations</li>
      <li>Concevoir des retours précis, hiérarchisés et actionnables</li>
      <li>Protection des données personnelles : stockage sécurisé et contrôle d’accès</li>
      <li>Tâches en arrière-plan et reprises pour les analyses longues</li>
    </ul>
    `,
    images: ["https://i.ibb.co/cXxgBKv8/001.jpg",
      "https://i.ibb.co/dwBbtJWf/004.jpg",
      "https://i.ibb.co/BKCh6mJm/005.jpg"],
    liveUrl: "https://ai-resume-analyser-plum.vercel.app/",
    sourceCodeUrl: ""
  },
  {
    slug: "porto-web",
    title_en: "Portfolio Website",
    title_fr: "Site de portfolio",
    imageUrl: "/projects/port.png",
    summary_en: "This portfolio website serves as a central hub for my professional and personal projects, highlighting my technical skills, design sense, and creativity",
    summary_fr: "Ce site de portfolio sert de point central pour mes projets professionnels et personnels, mettant en valeur mes compétences techniques, mon sens du design et ma créativité",
    tags: ["React", "TailwindCSS", "ShadCN", "ThreeJS"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A personal portfolio showcasing technical skills, experience, and creative work through
      clean layouts, smooth animations, and responsive design across devices.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>3D animations</li>
      <li>Smooth motions and transitions</li>
      <li>Interactive graphics</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React</li>
      <li><b>Styling : </b>TailwindCSS, ShadCN</li>
      <li><b>3D : </b>ThreeJS</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Optimizing performance (Lighthouse, code-splitting, lazy-loading)</li>
      <li>ThreeJS basics: GLTF optimization and scene management</li>
      <li>Design systems with reusable components and tokens</li>
      <li>Accessibility best practices (focus, contrast, keyboard nav)</li>
      <li>SEO for SPAs: meta tags, Open Graph, and pre-rendering</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Un portfolio personnel mettant en avant mes compétences, mon expérience et mes projets,
      avec des mises en page épurées, des animations fluides et un design responsive sur tous les appareils.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Animations 3D</li>
      <li>Transitions et mouvements fluides</li>
      <li>Graphiques interactifs</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React</li>
      <li><b>Style&nbsp;: </b>TailwindCSS, ShadCN</li>
      <li><b>3D&nbsp;: </b>ThreeJS</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
      <li>Optimiser les performances (Lighthouse, code-splitting, lazy-loading)</li>
      <li>Notions clés de ThreeJS : optimisation GLTF et gestion de scène</li>
      <li>Systèmes de design avec composants réutilisables et tokens</li>
      <li>Bonnes pratiques d’accessibilité (focus, contraste, clavier)</li>
      <li>SEO pour SPA : balises meta, Open Graph et pré-rendu</li>
    </ul>
    `,
    images: [],
    liveUrl: "https://webfolio-smoky.vercel.app/",
    sourceCodeUrl: "https://github.com/dnguye12/webfolio"
  },
  {
    slug: "div-insight",
    title_en: "Dividend Insight (Ongoing)",
    title_fr: "Dividend Insight (en cours)",
    imageUrl: "/projects/div.png",
    summary_en: "A comprehensive stock analysis platform that leverages web scraping, data science, and AI to deliver accurate and actionable financial insights",
    summary_fr: "Une plateforme d'analyse boursière complète qui exploite le web scraping, la data science et l'IA pour fournir des insights financiers précis et exploitables",
    tags: ["NextJS", "ExpressJS", "PostgreSQL", "AI", "Puppeteer", "Machine Learning", "Algorithms"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A full-stack platform for real-time stock data, price estimations, and in-depth analysis.
      Combines scraping, algorithms, and AI to deliver actionable insights with interactive visuals.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Data scraping from Yahoo Finance</li>
      <li>Advanced algorithms for performance analysis</li>
      <li>AI agent integration</li>
      <li>Interactive data visualization</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React/NextJS</li>
      <li><b>Backend : </b>Express.js</li>
      <li><b>Database : </b>PostgreSQL</li>
      <li><b>Scraping : </b>Puppeteer</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Ethical scraping and resilient crawlers (rotating proxies, backoff)</li>
      <li>Designing ETL pipelines and scheduled data refresh</li>
      <li>Time-series baselines and model evaluation</li>
      <li>Caching strategies for fast read-heavy dashboards</li>
      <li>API design for analytics and visualization layers</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Une plateforme full-stack pour des données boursières en temps réel, des estimations de prix
      et des analyses détaillées. Elle combine scraping, algorithmes et IA avec des visualisations interactives.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Extraction de données depuis Yahoo Finance</li>
      <li>Algorithmes avancés pour l’analyse de performance</li>
      <li>Intégration d’un agent IA</li>
      <li>Visualisations de données interactives</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React</li>
      <li><b>Backend&nbsp;: </b>Express.js</li>
      <li><b>Base de données&nbsp;: </b>MongoDB</li>
      <li><b>Scraping&nbsp;: </b>Puppeteer</li>
      <li><b>Hébergement&nbsp;: </b>Plateforme cloud évolutive</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
      <li>Scraping éthique et robots résilients (proxies rotatifs, backoff)</li>
      <li>Conception de pipelines ETL et rafraîchissements planifiés</li>
      <li>Modèles de séries temporelles et évaluation</li>
      <li>Stratégies de cache pour des tableaux de bord rapides</li>
      <li>Conception d’API pour les couches analytics et visualisation</li>
    </ul>
    `,
    images: ["https://i.ibb.co/3YWHDrSc/001.jpg",
      "https://i.ibb.co/Z6x5jvcs/002.jpg",
      "https://i.ibb.co/svwDrCNj/003.jpg",
      "https://i.ibb.co/nqBpdG3r/004.jpg",],
    liveUrl: "",
    sourceCodeUrl: ""
  },
  {
    slug: "incre-para",
    title_en: "Increment Paradise",
    title_fr: "Increment Paradise",
    imageUrl: "/projects/para.png",
    summary_en: "Tebex E-commerce webstore for Increment Paradise Minecraft server, enabling users to buy in-game items and manage purchases",
    summary_fr: "Une plateforme e-commerce sur Tebex adaptée à la communauté Minecraft Increment Paradise, permettant aux utilisateurs d'acheter des objets en jeu et de gérer leurs achats",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A Tebex-based shop for a Minecraft community. Supports user accounts, purchases,
      and dynamic offers tailored to player behavior.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Admin panel to manage website and products</li>
      <li>Login system for players</li>
      <li>Dynamic offers based on purchase history</li>
      <li>Databases for users and products</li>
      <li>Real-time updates synced with the Minecraft server</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>HTML, CSS, JavaScript</li>
      <li><b>Backend : </b>Custom server logic</li>
      <li><b>Database : </b>MongoDB</li>
      <li><b>Hosting : </b>Custom solution with real-time server integration</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>Integrating payments system and webhooks securely</li>
      <li>Real-time game server syncing and failure recovery</li>
      <li>Fraud prevention and audit logging for purchases</li>
      <li>Personalized offers</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Une boutique Tebex pour une communauté Minecraft. Prise en charge des comptes,
      des achats et d’offres dynamiques adaptées au comportement des joueurs.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Panneau d’administration pour gérer le site et les produits</li>
      <li>Système de connexion pour les joueurs</li>
      <li>Offres dynamiques selon l’historique d’achats</li>
      <li>Bases de données pour utilisateurs et produits</li>
      <li>Mises à jour en temps réel synchronisées avec le serveur Minecraft</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>HTML, CSS, JavaScript</li>
      <li><b>Backend&nbsp;: </b>Logique serveur personnalisée</li>
      <li><b>Base de données&nbsp;: </b>MongoDB</li>
      <li><b>Hébergement&nbsp;: </b>Solution personnalisée avec intégration temps réel</li>
    </ul>
    <br/>
    <h2>Ce que j'ai appris</h2>
    <ul>
      <li>Intégration sécurisée du système de paiement et des webhooks</li>
      <li>Synchronisation en temps réel avec le serveur de jeu et reprise sur incident</li>
      <li>Prévention de la fraude et journaux d’audit des achats</li>
      <li>Offres personnalisées</li>
    </ul>
    `,
    images: ["https://i.ibb.co/gMwMG2Yk/001.jpg",
      "https://i.ibb.co/SwXJNR9X/002.jpg",
      "https://i.ibb.co/Z1gZPhJB/003.jpg",
      "https://i.ibb.co/1YjkgJML/004.jpg",
      "https://i.ibb.co/HTy9q5B7/005.jpg",],
    liveUrl: "https://shop.incrementalparadise.com/",
    sourceCodeUrl: ""
  },
  {
    slug: "cocktail",
    title_en: "Cocktail Random",
    title_fr: "Cocktail aléatoire",
    imageUrl: "/projects/cocktail.png",
    summary_en: "A website where user can explore cocktail, leave comments and rate them. One of my first full stack application.",
    summary_fr: "Un site où les utilisateurs peuvent découvrir des cocktails, laisser des commentaires et les noter. L’une de mes premières applications full-stack.",
    tags: ["React", "React Router", "TailwindCSS", "ExpressJS", "PostgreSQL"],
    page_desc_en: `
    <h2>Project description</h2>
    <p>
      A platform that helps user choose their next cocktail, search up recipe and leave their comments on the drink. 
      The reason for the coktail theme is I like cooking and mixing in general.
    </p>
    <br/>
    <h2>Features</h2>
    <ul>
      <li>Cocktail database indexed for fast searching</li>
      <li>Like and comment system for logged-in users</li>
      <li>Review history for cocktails you've rated or commented on</li>
      <li>Detailed recipes and step-by-step instructions</li>
    </ul>
    </br>
    <h2>Tech Stack</h2>
    <ul>
      <li><b>Frontend : </b>React, React Router, TailwindCSS</li>
      <li><b>Backend : </b>ExpressJS</li>
      <li><b>Database : </b>PostgreSQL</li>
    </ul>
    <br/>
    <h2>What I learned</h2>
    <ul>
      <li>How to structure and ship one of my first full-stack applications</li>
      <li>Client-side routing, component state, and forms with React & React Router</li>
      <li>Designing RESTful endpoints and middleware in Express</li>
      <li>Relational schema design in PostgreSQL with proper indexing for search</li>
      <li>Input validation, error handling, and API responses that are consistent</li>
      <li>Query optimization and simple caching to improve perceived performance</li>
    </ul>
    `,
    page_desc_fr: `
    <h2>Description du projet</h2>
    <p>
      Une plateforme qui aide les utilisateurs à choisir leur prochain cocktail,
      consulter des recettes et partager leurs avis. Le thème des cocktails vient
      de mon intérêt pour la cuisine et le « mixing » en général.
    </p>
    <br/>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Base de données de cocktails indexée pour des recherches rapides</li>
      <li>Système de mentions « J’aime » et de commentaires pour les utilisateurs connectés</li>
      <li>Historique des avis pour les cocktails que vous avez notés ou commentés</li>
      <li>Recettes détaillées et instructions étape par étape</li>
    </ul>
    </br>
    <h2>Stack technique</h2>
    <ul>
      <li><b>Frontend&nbsp;: </b>React, React Router, TailwindCSS</li>
      <li><b>Backend&nbsp;: </b>ExpressJS</li>
      <li><b>Base de données&nbsp;: </b>PostgreSQL</li>
    </ul>
    <br/>
    <h2>Ce que j’ai appris</h2>
    <ul>
      <li>Structurer et livrer l’une de mes premières applications full-stack</li>
      <li>Routing côté client, état des composants et formulaires avec React & React Router</li>
      <li>Concevoir des endpoints REST et du middleware dans Express</li>
      <li>Modélisation relationnelle dans PostgreSQL avec indexation adaptée à la recherche</li>
      <li>Validation des entrées, gestion des erreurs et réponses API cohérentes</li>
      <li>Optimisation des requêtes et mise en cache simple pour améliorer les performances</li>
    </ul>
    `,
    images: [
      "https://i.ibb.co/kz6n9ZV/001.jpg",
      "https://i.ibb.co/HDr7SjD0/002.png",
      "https://i.ibb.co/G4VY2P7m/003.jpg",
      "https://i.ibb.co/QjfYpqQL/004.jpg",
      "https://i.ibb.co/Xf1ztDsB/005.jpg",
    ],
    liveUrl: "https://cocktail-backend-38zm.onrender.com/",
    sourceCodeUrl: ""
  }
];
