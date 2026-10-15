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
    role: "Técnico de producto",
    company: "Lidera Soluciones",
    link: "https://liderasoluciones.com",
    period: "Sep 2026 — Actualidad",
    current: true,
    summary:
      "Formo parte del equipo de producto de Spiga+, el software con el que concesionarios, talleres e importadores gestionan su día a día.",
    highlights: [
      "Analizo nuevas funcionalidades e integraciones y las convierto en requisitos funcionales claros para el equipo de desarrollo.",
      "Preparo la documentación técnica y realizo pruebas técnicas y funcionales antes de cada entrega.",
      "Trabajo con clientes y proveedores para detectar incidencias y proponer mejoras en el producto.",
    ],
    tags: ["Análisis funcional", "Requisitos", "Integraciones", "API REST", "SOAP", "Testing"],
  },
  {
    role: "Desarrollador Full-Stack",
    company: "DigitalizaT Solutions",
    link: "https://digitalizat.com",
    period: "Oct 2024 — Jul 2026",
    location: "Vigo",
    highlights: [
      "Lideré el diseño y desarrollo del módulo de expedientes de vehículo nuevo y de ocasión (VO/VN) para BYD e Hyundai, que abrió la puerta a nuevos concesionarios.",
      "Integración con Renault para sincronizar el stock de vehículos de ocasión de los talleres, con procesos diarios, mensuales y bajo demanda.",
      "Microservicios para actualizar el stock de los concesionarios de BYD España y automatizar la impresión de facturas.",
      "Migración progresiva de pantallas legacy (JSP y jQuery) a Angular y optimización del backend en Java y MariaDB.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "MariaDB", "MongoDB", "Kafka", "Docker"],
  },
  {
    role: "Desarrollador Back-end",
    company: "RecambiosDiez",
    link: "https://recambiosdiez.com",
    period: "Feb 2024 — Sep 2024",
    location: "Valença, Portugal",
    highlights: [
      "Módulos a medida para PrestaShop y aplicaciones internas para agilizar el trabajo diario del equipo.",
      "Endpoints REST para extraer y analizar datos operativos y automatizar tareas recurrentes.",
      "Primeros pasos de un ERP propio para sustituir el front-end de PrestaShop y ganar rendimiento.",
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
      "Gestión integral de pistas deportivas: reservas, estadísticas y administración en tiempo real para clubes.",
    link: "https://app.hugomaartinez.dev",
    image: "/projects/courtly.png",
    alt: "Página de inicio de Courtly, aplicación de gestión de pistas deportivas",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Curriculum Vitae",
    description:
      "Currículum interactivo y minimalista. Multilingüe (ES, EN, GL, PT) y optimizado para SEO, rendimiento e impresión.",
    link: "https://cv.hugomaartinez.dev",
    github: "https://github.com/hugomaartinez/hugomaartinez-cv",
    image: "/projects/cv.png",
    alt: "Captura de pantalla de mi currículum vitae online",
    tags: ["Astro"],
  },
  {
    title: "FenixZone Timers",
    description:
      "Temporizadores en tiempo real para las casas de robo de un servidor de GTA San Andreas Multiplayer.",
    link: "https://fenixzone-timers.vercel.app/",
    github: "https://github.com/hugomaartinez/fenixzone-timers",
    image: "/projects/fenixzone-timers.png",
    alt: "Panel con los temporizadores de las casas de robo de FenixZone",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Este portfolio",
    description:
      "La web que estás viendo: diseño propio, modo claro y oscuro, sin frameworks de cliente y con datos estructurados para SEO.",
    link: "https://hugomaartinez.dev",
    github: "https://github.com/hugomaartinez/porfolio-hugomaartinez",
    image: "/projects/porfolio.png",
    alt: "Captura de pantalla de mi portfolio personal",
    tags: ["Astro", "Tailwind CSS"],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Producto",
    items: [
      "Análisis funcional",
      "Requisitos",
      "Documentación técnica",
      "Pruebas funcionales",
      "Integraciones",
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
