// Contenido del portfolio. Para actualizar experiencia, proyectos o stack basta con tocar este archivo.

export const PROFILE = {
  name: "Hugo Martínez Barros",
  role: "Técnico de producto y desarrollador de software",
  location: "Gondomar, Galicia",
  email: "hugo.martinez.ba2003@gmail.com",
  site: "https://hugomaartinez.dev",
  cv: "https://cv.hugomaartinez.dev",
  linkedin: "https://linkedin.com/in/hugomaartinez",
  github: "https://github.com/hugomaartinez",
  // Primer trabajo como desarrollador, para calcular los años de experiencia
  careerStart: new Date(2024, 1, 1),
  birthDate: { year: 2003, month: 7, day: 13 },
};

export interface Job {
  role: string;
  company: string;
  link?: string;
  period: string;
  location?: string;
  current?: boolean;
  summary?: string;
  highlights: string[];
  tags: string[];
}

export const EXPERIENCE: Job[] = [
  {
    role: "Técnico de Producto",
    company: "Lidera Soluciones",
    link: "https://liderasoluciones.com",
    period: "Sep 2026 — Actualidad",
    current: true,
    summary:
      "Equipo de producto de Spiga+, el software de gestión para concesionarios, talleres e importadores del sector de la automoción.",
    highlights: [
      "Elaboración de análisis técnicos de nuevos desarrollos, que sirven de base al equipo de programación para su implementación.",
      "Análisis de integraciones con marcas del sector de la automoción, definiendo el alcance y los requisitos técnicos de cada desarrollo.",
    ],
    tags: ["Análisis técnico", "Integraciones", "Requisitos", "Automoción"],
  },
  // Textos de DigitalizaT y RecambiosDiez sacados del CV (hugomaartinez-cv/src/data/cv.ts)
  {
    role: "Desarrollador Web Full-Stack",
    company: "DigitalizaT Solutions",
    link: "https://digitalizat.com",
    period: "Oct 2024 — Jul 2026",
    location: "Vigo, España",
    highlights: [
      "Desarrollo de una integración con Renault para actualizar el stock de vehículos de ocasión de los talleres conectados a la plataforma, con procesos diarios, mensuales y bajo demanda.",
      "Lideré el diseño y desarrollo del nuevo módulo de expedientes VO/VN para BYD e Hyundai, definiendo la estructura de datos, reglas de negocio y configuración de conceptos del expediente.",
      "El módulo permitió gestionar expedientes de vehículos nuevos y de ocasión, eliminó una limitación clave del producto y facilitó la entrada de nuevos concesionarios, con impacto positivo en la facturación.",
      "Colaboración en la integración de microservicios para actualizar el stock de concesionarios de BYD España y para automatizar procesos de impresión de facturas.",
      "Evolución de la arquitectura backend en Java y MariaDB, optimizando consultas y procesos críticos vinculados a la gestión de vehículos y expedientes.",
      "Desarrollo de interfaces dinámicas con Angular y migración progresiva de pantallas legacy basadas en JSP, JavaScript nativo y jQuery.",
      "Diseño y despliegue de un CMS con Hugo y PayloadCMS para redes de talleres, además de integraciones con APIs externas para procesos operativos.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "MariaDB", "MongoDB", "Kafka", "PayloadCMS", "Microservicios", "Docker"],
  },
  {
    role: "Desarrollador Web Back-end",
    company: "RecambiosDiez",
    link: "https://recambiosdiez.com",
    period: "Feb 2024 — Sep 2024",
    location: "Valença, Portugal",
    highlights: [
      "Desarrollo de módulos personalizados para la plataforma PrestaShop y creación de aplicaciones a medida para la optimización de procesos internos.",
      "Diseño y despliegue de endpoints para la extracción y análisis de datos operativos, integrando APIs REST para automatizar tareas recurrentes.",
      "Desarrollo inicial de un sistema ERP propio destinado a sustituir el front-end de PrestaShop, enfocado en mejorar el rendimiento y la escalabilidad de la plataforma.",
      "Implementación de soluciones con PHP, MySQL y JavaScript para adaptar el software a necesidades internas de negocio.",
    ],
    tags: ["PHP", "MySQL", "PrestaShop", "JavaScript"],
  },
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  alt: string;
  tags: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Courtly",
    description:
      "Gestión integral de pistas deportivas. Reservas, estadísticas y administración en tiempo real.",
    link: "https://app.hugomaartinez.dev",
    image: "/projects/courtly.png",
    alt: "Panel de control de la aplicación Courtly",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Curriculum Vitae",
    description:
      "Currículum profesional interactivo y minimalista. Multilingüe (ES, EN, GL, PT) y optimizado para SEO, rendimiento e impresión.",
    link: "https://cv.hugomaartinez.dev",
    github: "https://github.com/hugomaartinez/hugomaartinez-cv",
    image: "/projects/cv.png",
    alt: "Captura de pantalla de mi currículum vitae online",
    tags: ["Astro"],
  },
  {
    title: "FenixZone Timers",
    description:
      "Temporizadores en tiempo real para las casas de robo de un servidor de GTA San Andreas Multiplayer",
    link: "https://fenixzone-timers.vercel.app/",
    github: "https://github.com/hugomaartinez/fenixzone-timers",
    image: "/projects/fenixzone-timers.png",
    alt: "Imagen del proyecto de los temporizadores para las casas de robo de FenixZone",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio - Hugo Martínez Barros",
    description:
      "Mi portafolio personal, donde muestro mis proyectos y habilidades",
    link: "https://hugomaartinez.dev",
    github: "https://github.com/hugomaartinez/porfolio-hugomaartinez",
    image: "/projects/porfolio.png",
    alt: "Imagen de mi portafolio personal",
    tags: ["Astro", "Tailwind CSS"],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Producto",
    items: [
      "Análisis técnico",
      "Integraciones",
      "Requisitos",
      "Documentación técnica",
    ],
  },
  {
    group: "Back-end",
    items: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PHP",
      "Python",
      "API REST",
      "OpenAPI",
      "Microservicios",
      "Docker",
      "Git",
    ],
  },
  {
    group: "Front-end",
    items: ["Angular", "TypeScript", "JavaScript", "Astro", "Next.js", "Tailwind CSS", "Hugo"],
  },
  {
    group: "Datos e IA",
    items: [
      "MariaDB / MySQL",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
      "Hadoop",
      "LLMs y RAG",
      "Scikit-learn",
      "PyTorch",
      "OpenCV / YOLO",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Especialización en Inteligencia Artificial y Big Data",
    center: "IES Teis, Vigo",
    period: "2025 — 2026",
  },
  {
    title: "CFGS Desarrollo de Aplicaciones Web",
    center: "Colegio Montecastelo, Vigo",
    period: "2022 — 2024",
  },
];

export const LANGUAGES = [
  { name: "Castellano", level: "Nativo" },
  { name: "Gallego", level: "Nativo" },
  { name: "Inglés", level: "B2" },
];
