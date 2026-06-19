export const profile = {
  name: "Your Name",
  role: "Software Engineer · Backend Developer",
  location: "Your City, Country",
  tagline:
    "Building scalable backend systems, high-performance APIs, microservices, and data-intensive enterprise applications.",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  githubUsername: "your-username",
  resumeUrl: "/resume.pdf",
};

export const experience = [
  {
    company: "Your Company",
    role: "Software Engineer — Backend",
    period: "Present",
    location: "Your Location",
    points: [
      "Point 1 — describe what you built and the impact.",
      "Point 2 — mention specific technologies and results.",
      "Point 3 — highlight a performance improvement or feature.",
      "Point 4 — talk about collaboration or processes.",
      "Point 5 — any other notable achievement.",
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Project One",
    tagline: "Short tagline describing the project.",
    overview:
      "A brief overview of what the project does and who it serves.",
    architecture:
      "Description of the tech stack and architecture decisions.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST", "Docker"],
    challenges: [
      "Challenge you solved — describe the problem and solution.",
      "Another challenge — approach and outcome.",
    ],
    impact: [
      "Measurable result — performance, time saved, etc.",
      "Business impact — what improved for users or team.",
    ],
    image: "https://images.unsplash.com/photo-1506399309177-3b43e99fead2",
    accent: "from-blue-500/30 to-blue-900/0",
  },
  {
    id: "project-2",
    title: "Project Two",
    tagline: "Short tagline describing the project.",
    overview:
      "A brief overview of what the project does and who it serves.",
    architecture:
      "Description of the tech stack and architecture decisions.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST", "Docker"],
    challenges: [
      "Challenge you solved — describe the problem and solution.",
      "Another challenge — approach and outcome.",
    ],
    impact: [
      "Measurable result — performance, time saved, etc.",
      "Business impact — what improved for users or team.",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    accent: "from-emerald-500/30 to-emerald-900/0",
  },
  {
    id: "project-3",
    title: "Project Three",
    tagline: "Short tagline describing the project.",
    overview:
      "A brief overview of what the project does and who it serves.",
    architecture:
      "Description of the tech stack and architecture decisions.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MongoDB", "Docker"],
    challenges: [
      "Challenge you solved — describe the problem and solution.",
      "Another challenge — approach and outcome.",
    ],
    impact: [
      "Measurable result — performance, time saved, etc.",
      "Business impact — what improved for users or team.",
    ],
    image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    accent: "from-violet-500/30 to-violet-900/0",
  },
];

export const performanceMetrics = [
  { label: "API p95 latency", from: 420, to: 110, unit: "ms", delta: "-74%", note: "Query rewrites + caching" },
  { label: "Report generation", from: 38, to: 5, unit: "s", delta: "-87%", note: "Materialized views" },
  { label: "DB throughput", from: 1.0, to: 3.2, unit: "x", delta: "+220%", note: "Indexes + batching" },
  { label: "Memory footprint", from: 1.8, to: 1.1, unit: "GB", delta: "-39%", note: "Pool & fetch tuning" },
];

export const apiLatencyChart = [
  { stage: "Baseline", before: 420, after: 420 },
  { stage: "Indexes", before: 420, after: 310 },
  { stage: "Fetch graphs", before: 420, after: 220 },
  { stage: "Caching", before: 420, after: 160 },
  { stage: "Pool tune", before: 420, after: 110 },
];

export const aiWorkflow = [
  {
    title: "AI Tool 1",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "Sparkles",
  },
  {
    title: "AI Tool 2",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "Terminal",
  },
  {
    title: "AI Tool 3",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "Server",
  },
  {
    title: "AI Tool 4",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "Cpu",
  },
  {
    title: "AI Tool 5",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "Bug",
  },
  {
    title: "AI Tool 6",
    desc: "How you use this AI tool in your daily workflow.",
    icon: "GitPullRequest",
  },
];

export const skills = {
  Backend: ["Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5"],
  Database: ["DB 1", "DB 2", "DB 3", "DB 4", "DB 5"],
  DevOps: ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5"],
  "AI Tools": ["AI 1", "AI 2", "AI 3", "AI 4", "AI 5"],
  "Dev Tools": ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5"],
};

export const systemDesign = [
  { title: "REST API Design", desc: "Resource modelling, versioning, idempotency, pagination, and contract testing.", icon: "Network" },
  { title: "Microservices", desc: "Bounded contexts, service contracts, resilience patterns, and observability.", icon: "Boxes" },
  { title: "Event-driven", desc: "Async messaging, outbox pattern, eventual consistency, and replay strategies.", icon: "Radio" },
  { title: "Database Design", desc: "Normalization, indexing strategy, partitioning, and read/write path separation.", icon: "Database" },
  { title: "Scalability", desc: "Horizontal scale-out, caching tiers, connection pooling, and load shedding.", icon: "TrendingUp" },
  { title: "Performance", desc: "Profiling, query tuning, GC analysis, and end-to-end latency budgets.", icon: "Gauge" },
];

export const testimonials = [
  {
    quote: "Replace this with a real testimonial from a colleague or manager.",
    name: "Name",
    role: "Position",
  },
  {
    quote: "Replace this with a real testimonial from a colleague or manager.",
    name: "Name",
    role: "Position",
  },
  {
    quote: "Replace this with a real testimonial from a colleague or manager.",
    name: "Name",
    role: "Position",
  },
];
