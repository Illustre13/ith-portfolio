export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "software-dev",
    icon: "Code2",
    title: "Custom Software Development",
    shortDesc: "Tailored web applications, internal tools, APIs, and backend systems built to solve real business problems.",
    description: "We design and build production-grade software — from client-facing web applications to complex internal platforms. Every system is architected for reliability, security, and long-term maintainability.",
    subServices: [
      "Web applications & internal tools",
      "REST & GraphQL API development",
      "Backend systems & databases",
      "System integrations & automation",
    ],
    stack: ["Node.js", "Python", "React", "PostgreSQL", "TypeScript"],
    idealFor: "SMEs building their first digital product, NGOs needing custom platforms",
    color: "brand",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-data",
    icon: "Brain",
    title: "AI & Data Solutions",
    shortDesc: "Machine learning models, data pipelines, and agentic AI systems that turn raw data into actionable intelligence.",
    description: "From LLM-powered document automation to predictive analytics and earth observation ML, we build AI systems that are practical, explainable, and deployed in production.",
    subServices: [
      "Machine learning models & pipelines",
      "Agentic AI & LLM automation",
      "Document intelligence systems",
      "Analytics dashboards & reporting",
    ],
    stack: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Pandas"],
    idealFor: "Organisations with data they can't fully use",
    color: "kigali",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "digital-transformation",
    icon: "Layers",
    title: "Digital Transformation",
    shortDesc: "IT audits, technology roadmaps, and open-source platform deployment for organisations moving from paper to digital.",
    description: "We guide institutions through digital transitions — from assessing current processes to deploying, configuring, and training staff on proven open-source platforms.",
    subServices: [
      "IT audits & technology roadmaps",
      "Process digitisation & automation",
      "Paperless-NGX document management",
      "ERPNext, OpenMRS, Mojaloop deployment",
    ],
    stack: ["Paperless-NGX", "ERPNext", "OpenMRS", "Mojaloop", "UNICEF DPI"],
    idealFor: "NGOs and government offices moving from paper to digital",
    color: "brand",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "infrastructure",
    icon: "Server",
    title: "Infrastructure & DevOps",
    shortDesc: "Server configuration, CI/CD pipelines, and cloud architecture designed for reliability, security, and scale.",
    description: "We set up and manage the technical infrastructure your systems depend on — from VPS hardening to automated deployment pipelines and cloud cost optimisation.",
    subServices: [
      "VPS & server configuration",
      "CI/CD pipelines & automation",
      "Cloud architecture & cost optimisation",
      "Security hardening & monitoring",
    ],
    stack: ["AWS", "GCP", "DigitalOcean", "Docker", "GitHub Actions"],
    idealFor: "Teams that need reliable, secure, and scalable hosting",
    color: "kigali",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "data-analytics",
    icon: "BarChart3",
    title: "Data Analytics & Reporting",
    shortDesc: "Impact dashboards, M&E systems, and donor reporting tools that make your data legible and defensible.",
    description: "We build the reporting infrastructure that keeps organisations accountable to their stakeholders — custom dashboards, automated M&E pipelines, and donor-ready visualisations.",
    subServices: [
      "Impact & M&E dashboards",
      "Donor reporting automation",
      "Custom data visualisations",
      "Metabase & Power BI deployment",
    ],
    stack: ["Metabase", "Power BI", "Python", "dbt", "PostgreSQL"],
    idealFor: "NGOs with reporting obligations to international donors",
    color: "brand",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: "Training & Capacity Building",
    shortDesc: "Structured training programmes that leave your team capable of running and maintaining the systems we build.",
    description: "Technology is only valuable if the people using it understand it. We deliver hands-on training for deployed systems and run technical workshops that build lasting internal capability.",
    subServices: [
      "System training for deployed platforms",
      "Technical workshops for in-house teams",
      "Documentation & knowledge transfer",
      "Ongoing support retainers",
    ],
    stack: [],
    idealFor: "Organisations building internal digital capability",
    color: "kigali",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
];

export const CASE_STUDIES = [
  {
    id: "impact-dashboard",
    sector: "NGO",
    tag: "Data Analytics",
    title: "Impact Dashboard",
    client: "International NGO, Kigali",
    problem: "The organisation had five years of programme data across 14 Excel files with no unified view of results.",
    solution: "We built a Metabase-powered impact dashboard integrated with a PostgreSQL data warehouse, with automated nightly syncs from field data collection tools.",
    result: "40% reduction in monthly reporting time",
    stack: ["Metabase", "PostgreSQL", "Python", "dbt"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "document-management",
    sector: "NGO",
    tag: "Digital Transformation",
    title: "Document Management System",
    client: "National Programme Office",
    problem: "A 200-person office was managing contracts, policies, and project files across shared drives with no version control or access management.",
    solution: "We deployed Paperless-NGX on a hardened VPS with LDAP integration, custom document workflows, and staff training across three departments.",
    result: "98% of documents digitised within 90 days",
    stack: ["Paperless-NGX", "Docker", "LDAP", "Nginx"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ai-reporting-assistant",
    sector: "Government",
    tag: "Agentic AI",
    title: "AI Reporting Assistant",
    client: "Programme Monitoring Office",
    problem: "Programme officers spent 12+ hours per month extracting key metrics from PDF reports and drafting donor summaries manually.",
    solution: "We built an LLM-powered document intelligence pipeline that ingests PDF reports, extracts structured data, and generates draft donor narratives for human review.",
    result: "82% reduction in manual report processing time",
    stack: ["Python", "LangChain", "OpenAI API", "FastAPI", "React"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sme-erp",
    sector: "SME",
    tag: "Custom Software",
    title: "Inventory & Finance Platform",
    client: "Kigali-based Manufacturing SME",
    problem: "The business was tracking inventory, sales, and supplier payments across three disconnected systems that didn't talk to each other.",
    solution: "We deployed a customised ERPNext instance with tailored workflows for their manufacturing cycle, integrated with their mobile money payment provider.",
    result: "Single source of truth across all business functions",
    stack: ["ERPNext", "Python", "Frappe", "PostgreSQL"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Illustre didn't just build us a dashboard — they understood what we were actually trying to measure and why. The system they delivered has fundamentally changed how we report to our donors.",
    author: "Amara Diallo",
    role: "Programme Director",
    company: "Regional Health Initiative",
    avatar: "AD",
  },
  {
    quote:
      "We went from managing 10,000 documents across three shared drives to a fully searchable, permission-controlled archive in under three months. The training was exceptionally well-done.",
    author: "Jean-Pierre Habimana",
    role: "Head of Operations",
    company: "National Programme Office",
    avatar: "JH",
  },
  {
    quote:
      "The AI pipeline they built for our reporting process saved my team dozens of hours every month. More importantly, the quality of our donor narratives has improved significantly.",
    author: "Fatima Al-Hassan",
    role: "M&E Manager",
    company: "International Development Fund",
    avatar: "FA",
  },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Organisations Served" },
  { value: 82, suffix: "%", label: "Avg. Efficiency Gain" },
  { value: 3, suffix: " yrs", label: "Operating in Kigali" },
];

export const SKILLS_BADGES = [
  "Agentic AI",
  "ML / Earth Observation",
  "Data Analytics",
  "Open Source",
  "Scalable Systems",
  "Full-Stack Engineering",
];

export const TECH_STACK_LOGOS = [
  "Python",
  "Node.js",
  "React",
  "PostgreSQL",
  "AWS",
  "Paperless-NGX",
  "Metabase",
  "Docker",
];

export const SECTOR_FILTERS = ["All", "NGO", "SME", "Government", "Education"];

export const CONTACT_SERVICES = [
  "Custom Software Development",
  "AI & Data Solutions",
  "Digital Transformation",
  "Infrastructure & DevOps",
  "Data Analytics & Reporting",
  "Training & Capacity Building",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $10,000",
  "$10,000+",
  "Let's discuss",
];
