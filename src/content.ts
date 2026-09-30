export type Lang = "es" | "en";

type LogLine = { date: string; level: "INFO" | "READY"; text: string };

type Project = {
  id: string;
  name: string;
  context: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
  /** Hidden projects are kept in the file but not rendered until filled in. */
  hidden?: boolean;
};

export const links = {
  email: "tomasaladjem@gmail.com",
  github: "https://github.com/Samot2003",
  linkedin: "https://www.linkedin.com/in/tomas-aladjem/",
  cv: {
    es: "/cv/CV_Tomas_Aladjem_Ramallo_ES.pdf",
    en: "/cv/CV_Tomas_Aladjem_Ramallo_EN.pdf",
    ca: "/cv/CV_Tomas_Aladjem_Ramallo_CAT.pdf",
  },
};

const es = {
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Formación",
    contact: "Contacto",
    switchTo: "English",
  },
  hero: {
    name: "Tomás Aladjem Ramallo",
    role: "Ingeniero de software junior en Barcelona. Trabajo en backend, full stack y aplicaciones con IA.",
    status: "Disponible para trabajar",
    cv: "Descargar CV",
    write: "Escríbeme",
    logLabel: "Trayectoria en formato log",
    log: [
      { date: "2021-09", level: "INFO", text: "Empiezo Ingeniería Informática en la Universitat de Barcelona" },
      { date: "2025", level: "INFO", text: "Entro en Win Systems como ingeniero full stack en prácticas" },
      { date: "2026-01", level: "INFO", text: "Entrego ServerHealth: logs y métricas de todos los servidores en una sola web" },
      { date: "2026-02", level: "INFO", text: "Erasmus+ en la Università degli Studi di Trento" },
      { date: "2026-08", level: "INFO", text: "Presento mi TFG, MINDSCAPE, y el proyecto de agentes autónomos" },
      { date: "2026-10", level: "READY", text: "Busco mi primer puesto como ingeniero de software" },
    ] as LogLine[],
  },
  experience: {
    title: "Experiencia",
    company: "Win Systems",
    role: "Ingeniero de software full stack en prácticas",
    period: "2025 – 2026, Barcelona",
    companyNote:
      "Win Systems desarrolla WIGOS, un sistema de gestión de casinos que controla más de 100.000 máquinas en todo el mundo.",
    project: "ServerHealth",
    problem:
      "El equipo de QA tenía que conectarse por escritorio remoto a cada servidor para leer sus logs. Encontrar un error en un entorno con muchos servidores costaba mucho tiempo.",
    solution:
      "Construí ServerHealth, una web central que muestra los logs y el estado de todos los servidores sin entrar en ninguno.",
    builtTitle: "Qué construí",
    built: [
      "API REST en C# que recibe logs, líneas y métricas de los servidores cliente.",
      "Vista de logs con recuento de errores, excepciones y warnings, resaltado de sintaxis y filtros por nombre, fecha y número de errores.",
      "Modo monitor que muestra las nuevas líneas de un log en tiempo real.",
      "Dashboard de CPU, memoria, almacenamiento, bases de datos e IIS, con histórico en SQL Server usando Dapper.",
      "Capa de acceso a datos con DAOs e interfaces, y un Service Manager que controla el ciclo de vida de los servicios.",
    ],
    decisionsTitle: "Decisiones técnicas",
    decisions: [
      {
        title: "De enviar todo a pedir bajo demanda",
        text: "La primera versión copiaba todos los logs a un servidor central y el tráfico entre máquinas era demasiado alto. La rediseñamos: cada servidor envía un resumen en JSON y el contenido de un log solo viaja cuando alguien lo pide, codificado con MessagePack.",
      },
      {
        title: "Autenticación con tokens",
        text: "La API empezó abierta. Añadí autenticación por token con caducidad; los clientes guardan el token en memoria y lo renuevan solos antes de que expire.",
      },
      {
        title: "Nada de trabajo sin usuarios",
        text: "Un proceso detecta si alguien está usando la web. Tras cinco minutos sin actividad, los procesos de los servidores cliente pasan a espera hasta que vuelve un usuario.",
      },
    ],
    stack: ["C#", ".NET", "SQL Server", "Dapper", "JavaScript", "AJAX", "CSHTML", "MessagePack", "Git", "Bitbucket"],
  },
  projects: {
    title: "Proyectos",
    items: [
      {
        id: "mindscape",
        name: "MINDSCAPE",
        context: "Trabajo de Fin de Grado, Universitat de Barcelona, 2026",
        summary:
          "Una web que empieza la conversación con una imagen. Eliges una obra, un modelo de IA multimodal la analiza y te hace preguntas sobre lo que ves en ella. Está inspirada en la arteterapia y pensada como apoyo a la reflexión, no como sustituto de un profesional.",
        points: [
          "Frontend en React con Chakra UI y Framer Motion; backend REST en FastAPI documentado con Swagger.",
          "Gemini 2.5 Flash procesa imagen y texto. Cada fase del diálogo usa su propio prompt y el modelo responde en JSON con un campo que indica cuándo cerrar la sesión.",
          "Al terminar, genera un resumen de la conversación y lo exporta a PDF con ReportLab.",
          "Dirigido por la Dra. Maite López, con asesoría artística de Pilar Rosado (Facultad de Bellas Artes).",
        ],
        stack: ["React", "FastAPI", "Python", "Gemini 2.5 Flash", "Chakra UI", "REST", "ReportLab"],
        links: [{ label: "Código en GitHub", href: "https://github.com/Samot2003/MINDSCAPE-Multimodal-AI-Assistant" }],
        images: [
          { src: "/img/mindscape-image-selection.jpg", alt: "Pantalla de MINDSCAPE para elegir la imagen que inicia la conversación" },
          { src: "/img/mindscape-chat.jpg", alt: "Conversación de MINDSCAPE: el modelo pregunta sobre los colores de la imagen elegida" },
        ],
      },
      {
        id: "agents",
        name: "Agentes autónomos para Deliveroo.js",
        context: "Autonomous Software Agents, Università di Trento, 2026. Con Erik Brenner Hedmark",
        summary:
          "Dos agentes que recogen y entregan paquetes en un mapa con obstáculos que cambian, compitiendo contra otros agentes y colaborando entre ellos.",
        points: [
          "Agente BDI con ciclo percibir, revisar creencias, deliberar y actuar; navegación con A* y replanificación cuando aparece un obstáculo.",
          "Agente basado en LLM que decide usando herramientas sobre el estado del juego.",
          "Planificación PDDL con Fast Downward: el dominio y el problema se generan a partir del estado actual.",
          "Protocolo de comunicación para que los dos agentes se repartan el trabajo.",
        ],
        stack: ["JavaScript", "Node.js", "BDI", "A*", "PDDL", "LLM"],
        links: [],
      },
      {
        id: "dockly",
        name: "Dockly",
        context: "",
        summary: "",
        points: [],
        stack: [],
        links: [],
        hidden: true,
      },
    ] as Project[],
  },
  education: {
    title: "Formación",
    items: [
      { name: "Grado en Ingeniería Informática", where: "Universitat de Barcelona", when: "2021 – 2026" },
      { name: "Erasmus+", where: "Università degli Studi di Trento, Italia", when: "Febrero – julio 2026" },
      { name: "Cambridge English: Advanced (C1)", where: "Cambridge Assessment English", when: "2021" },
    ],
    languagesTitle: "Idiomas",
    languages: "Español y catalán nativos, inglés C1.",
  },
  skills: {
    title: "Herramientas",
    groups: [
      { name: "Lenguajes", items: ["C#", "Python", "Java", "JavaScript", "SQL", "C++", "C"] },
      { name: "Backend", items: ["APIs REST", "C# / .NET", "FastAPI", "Dapper", "Arquitectura cliente-servidor"] },
      { name: "Frontend", items: ["React", "HTML", "CSS", "Chakra UI"] },
      { name: "IA", items: ["Gemini API", "LLMs", "IA multimodal", "Prompt engineering", "PDDL"] },
      { name: "Datos", items: ["SQL Server", "MySQL", "Firebase"] },
      { name: "Día a día", items: ["Git", "GitHub", "Bitbucket", "Swagger", "VS Code", "IntelliJ IDEA"] },
    ],
  },
  contact: {
    title: "Contacto",
    text: "Busco un puesto de ingeniero de software junior en backend, full stack o IA, en Barcelona o en remoto. Si tienes una oferta o quieres hablar de algún proyecto, escríbeme.",
    email: "Correo",
    cvTitle: "Currículum en PDF",
    cvLangs: { es: "Español", en: "Inglés", ca: "Catalán" },
    photoAlt: "Foto de Tomás Aladjem Ramallo",
  },
  footer: "Hecho con Next.js.",
};

const en: typeof es = {
  nav: {
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    switchTo: "Español",
  },
  hero: {
    name: "Tomás Aladjem Ramallo",
    role: "Junior software engineer based in Barcelona. I work on backend, full stack and AI applications.",
    status: "Open to work",
    cv: "Download CV",
    write: "Email me",
    logLabel: "Career path as a log",
    log: [
      { date: "2021-09", level: "INFO", text: "Start Computer Engineering at the University of Barcelona" },
      { date: "2025", level: "INFO", text: "Join Win Systems as a full stack software engineering intern" },
      { date: "2026-01", level: "INFO", text: "Ship ServerHealth: logs and metrics from every server in one web app" },
      { date: "2026-02", level: "INFO", text: "Erasmus+ at the University of Trento" },
      { date: "2026-08", level: "INFO", text: "Present my thesis, MINDSCAPE, and the autonomous agents project" },
      { date: "2026-10", level: "READY", text: "Looking for my first software engineering role" },
    ],
  },
  experience: {
    title: "Experience",
    company: "Win Systems",
    role: "Full stack software engineering intern",
    period: "2025 – 2026, Barcelona",
    companyNote:
      "Win Systems builds WIGOS, a casino management system that runs more than 100,000 machines worldwide.",
    project: "ServerHealth",
    problem:
      "The QA team had to open a remote desktop session on each server to read its logs. Tracking down an error across many servers took a lot of time.",
    solution:
      "I built ServerHealth, a central web app that shows logs and server health for every machine without logging into any of them.",
    builtTitle: "What I built",
    built: [
      "A C# REST API that receives logs, lines and metrics from client servers.",
      "A log viewer that counts errors, exceptions and warnings, highlights syntax and filters by name, date and error count.",
      "A monitor mode that streams new log lines in real time.",
      "A dashboard for CPU, memory, storage, databases and IIS, with history stored in SQL Server through Dapper.",
      "A data access layer built on DAOs and interfaces, plus a Service Manager that owns the service lifecycle.",
    ],
    decisionsTitle: "Technical decisions",
    decisions: [
      {
        title: "From pushing everything to fetching on demand",
        text: "The first version copied every log to a central server, and traffic between machines was too high. We redesigned it: each server sends a JSON summary, and a log's content only travels when someone asks for it, encoded with MessagePack.",
      },
      {
        title: "Token authentication",
        text: "The API started out open. I added expiring token authentication; clients keep the token in memory and renew it on their own before it expires.",
      },
      {
        title: "No work without users",
        text: "A background process checks whether anyone is using the site. After five idle minutes, the client server processes go on standby until a user comes back.",
      },
    ],
    stack: es.experience.stack,
  },
  projects: {
    title: "Projects",
    items: [
      {
        ...es.projects.items[0],
        context: "Bachelor's thesis, University of Barcelona, 2026",
        summary:
          "A web app where the conversation starts with an image. You pick an artwork, a multimodal AI model analyses it and asks you about what you see in it. It draws on art therapy and is meant to support reflection, not to replace a professional.",
        points: [
          "React frontend with Chakra UI and Framer Motion; FastAPI REST backend documented with Swagger.",
          "Gemini 2.5 Flash handles image and text. Each stage of the dialogue has its own prompt, and the model replies in JSON with a field that signals when to end the session.",
          "When the session ends, it writes a summary of the conversation and exports it to PDF with ReportLab.",
          "Supervised by Dr. Maite López, with artistic guidance from Pilar Rosado (Faculty of Fine Arts).",
        ],
        links: [{ label: "Code on GitHub", href: "https://github.com/Samot2003/MINDSCAPE-Multimodal-AI-Assistant" }],
        images: [
          { src: "/img/mindscape-image-selection.jpg", alt: "MINDSCAPE screen for choosing the image that starts the conversation" },
          { src: "/img/mindscape-chat.jpg", alt: "MINDSCAPE conversation: the model asks about the colours in the chosen image" },
        ],
      },
      {
        ...es.projects.items[1],
        name: "Autonomous agents for Deliveroo.js",
        context: "Autonomous Software Agents, University of Trento, 2026. With Erik Brenner Hedmark",
        summary:
          "Two agents that pick up and deliver parcels on a map with changing obstacles, competing against other agents and cooperating with each other.",
        points: [
          "A BDI agent running a sense, revise, deliberate, act loop, navigating with A* and replanning when an obstacle appears.",
          "An LLM-based agent that decides by calling tools over the game state.",
          "PDDL planning with Fast Downward, generating the domain and problem from the current state.",
          "A communication protocol so both agents can split the work.",
        ],
      },
      es.projects.items[2],
    ],
  },
  education: {
    title: "Education",
    items: [
      { name: "BSc in Computer Engineering", where: "University of Barcelona", when: "2021 – 2026" },
      { name: "Erasmus+", where: "University of Trento, Italy", when: "February – July 2026" },
      { name: "Cambridge English: Advanced (C1)", where: "Cambridge Assessment English", when: "2021" },
    ],
    languagesTitle: "Languages",
    languages: "Native Spanish and Catalan, C1 English.",
  },
  skills: {
    title: "Tools",
    groups: [
      { name: "Languages", items: es.skills.groups[0].items },
      { name: "Backend", items: ["REST APIs", "C# / .NET", "FastAPI", "Dapper", "Client-server architecture"] },
      { name: "Frontend", items: es.skills.groups[2].items },
      { name: "AI", items: ["Gemini API", "LLMs", "Multimodal AI", "Prompt engineering", "PDDL"] },
      { name: "Data", items: es.skills.groups[4].items },
      { name: "Everyday", items: es.skills.groups[5].items },
    ],
  },
  contact: {
    title: "Contact",
    text: "I'm looking for a junior software engineering role in backend, full stack or AI, in Barcelona or remote. If you have an opening or want to talk about a project, email me.",
    email: "Email",
    cvTitle: "CV as PDF",
    cvLangs: { es: "Spanish", en: "English", ca: "Catalan" },
    photoAlt: "Photo of Tomás Aladjem Ramallo",
  },
  footer: "Built with Next.js.",
};

export const content = { es, en };
export type Content = typeof es;
