import { ProjectItem, SpecialtyItem, TechCategory } from '../types';

export const portfolioInfo = {
  name: 'Chidera Collins',
  role: 'Software Engineer & AI Architect',
  availabilityBadge: 'OPEN TO SENIOR MOBILE, BACKEND & AI AGENT OPPORTUNITIES',
  heroKicker: 'FLUTTER · FASTAPI · MCP',
  heroTitle: 'Architecting High-Performance Mobile Apps, Resilient FastAPI Backends & Autonomous AI Agents',
  heroSubtitle:
    'Specialized in full-lifecycle software delivery: crafting robust cross-platform mobile apps with Flutter, engineering low-latency asynchronous Python microservices with FastAPI, and orchestrating intelligent LLM workflows with the Model Context Protocol (MCP).',
  mobileHeroSubtitle:
    'Specialized in full-lifecycle software delivery with Flutter, FastAPI, and Model Context Protocol (MCP) agent workflows.',
  floatingSpecialty: 'FastAPI + MCP',
  githubHandle: '@chideracollins',
  githubUrl: 'https://github.com/chideracollins',
  email: 'chideracollins@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/chideracollins',
  introHeading: 'Core services and disciplines',
  introBody:
    'A comprehensive breakdown of technical proficiencies across mobile development, backend engineering, and intelligent agent systems.',
  ctaEyebrow: 'START A CONVERSATION',
  ctaHeadline: 'Ready to Build Something Exceptional?',
  ctaBody:
    'Whether you need a Flutter mobile specialist, a high-throughput FastAPI backend architect, or an autonomous AI agent engineer, I am ready to deliver production-grade impact.',
};

export const heroMetrics = [
  {
    discipline: 'Mobile',
    label: 'Flutter & Dart Engineering',
  },
  {
    discipline: 'Backend',
    label: 'FastAPI & Python Microservices',
  },
  {
    discipline: 'Agents',
    label: 'Autonomous AI Agents & MCP',
  },
];

export const specialties: SpecialtyItem[] = [
  {
    title: 'Mobile Apps',
    detail: 'Clean Architecture, BLoC/Riverpod, offline storage.',
  },
  {
    title: 'Backend Services',
    detail: 'FastAPI, Pydantic, SQLAlchemy v2, Docker, PostgreSQL.',
  },
  {
    title: 'Agentic AI',
    detail: 'MCP, tool use, function calling and multi-agent workflows.',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'project-1',
    index: '01',
    type: 'MOBILE',
    title: 'Production Mobile Suite',
    description:
      'Cross-platform Flutter app with Clean Architecture, BLoC/Riverpod state isolation, offline SQLite caching, custom UI animations and CI/CD pipelines.',
    tags: ['Flutter', 'Dart', 'SQLite'],
    githubUrl: 'https://github.com/chideracollins',
    highlights: [
      'Layered separation: Presentation, Domain, Data with repository contracts',
      'BLoC state machines with reactive reactive event-driven flows',
      'Local-first encrypted SQLite database with sync reconciliation',
    ],
  },
  {
    id: 'project-2',
    index: '02',
    type: 'BACKEND',
    title: 'Asynchronous API Engine',
    description:
      'High-throughput FastAPI backend with Pydantic v2 validation, async SQLAlchemy v2, Redis caching, JWT authentication and Dockerized infrastructure.',
    tags: ['FastAPI', 'Postgres', 'Docker'],
    githubUrl: 'https://github.com/chideracollins',
    highlights: [
      'Async connection pooling with asyncpg and connection failover',
      'Strict schema validation using Pydantic v2 rust core',
      'Containerized multi-stage Docker builds with redis worker queues',
    ],
  },
  {
    id: 'project-3',
    index: '03',
    type: 'AGENTS',
    title: 'MCP Multi-Agent Orchestrator',
    description:
      'Autonomous workflow system integrating MCP servers with dynamic tool routing, contextual memory retrieval and JSON-schema verification.',
    tags: ['MCP', 'LangChain', 'Tools'],
    githubUrl: 'https://github.com/chideracollins',
    highlights: [
      'Full Model Context Protocol client and server architecture',
      'Dynamic tool routing with runtime schema compliance checks',
      'Agentic feedback loops with self-correcting validation passes',
    ],
  },
  {
    id: 'project-4',
    index: '04',
    type: 'SYSTEM',
    title: 'Realtime Mobile-Cloud Platform',
    description:
      'Distributed system connecting Flutter clients with a FastAPI WebSocket gateway and worker queues for real-time synchronization.',
    tags: ['WebSockets', 'AsyncIO', 'CI/CD'],
    githubUrl: 'https://github.com/chideracollins',
    highlights: [
      'Bidirectional low-latency WebSocket messaging with heartbeat recovery',
      'AsyncIO background task queue with automated retry mechanisms',
      'Zero-downtime GitHub Actions CI/CD deployment pipelines',
    ],
  },
];

export const techCategories: TechCategory[] = [
  {
    title: 'Mobile Ecosystem',
    items: [
      'Flutter / Dart',
      'Clean Architecture',
      'BLoC + Riverpod',
      'Offline Persistence',
    ],
  },
  {
    title: 'Backend & Systems',
    items: [
      'Python 3.12',
      'FastAPI',
      'SQLAlchemy v2',
      'Docker Containerization',
    ],
  },
  {
    title: 'Agentic AI & DevOps',
    items: [
      'Model Context Protocol (MCP)',
      'Tool Routing & Schemas',
      'LangChain & Vector Stores',
      'Prompt & Persona Design',
    ],
  },
];

export const mobileStackChipRows = [
  ['Flutter & Dart', 'BLoC/Riverpod', 'Clean Arch'],
  ['Python 3.12', 'FastAPI', 'SQLAlchemy'],
  ['MCP', 'Tool Routing', 'LangChain'],
];
