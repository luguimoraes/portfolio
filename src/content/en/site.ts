// English version of src/content/site.ts. Keep the same structure:
// src/content/i18n.ts checks that both languages have the same shape.
import type { CareerItem, Link } from "../site";
import type { IconName } from "@/components/icons";

export type { CareerItem, Link };

export const profile = {
  name: "Luis Moraes",
  firstName: "Luis",
  fullName: "Luis Guilherme de Moraes",
  role: "Customer Success Manager",
  badge: "Senior CSM at ZENVIA · building AI agents for CS",
  headline: "Customer Success with data, automation and AI.",
  intro:
    "Over four years in Customer Success and CX, now managing SenseData enterprise accounts at ZENVIA. I build the tools I use every day: automations, dashboards and AI agents. Before CS, civil engineering and construction planning taught me to measure before changing anything.",
  location: "São Paulo, Brazil",
  photo: "/luis.jpg" as string | null,
  email: null as string | null,
  orbit: "CUSTOMER SUCCESS · DATA · AUTOMATION · AI · CX · ",
  workedAt: ["ZENVIA", "Mercado Livre", "Wellhub", "QuintoAndar", "mLabs", "4blue"],
  studying: ["MBA in Data Science and AI · USP/Esalq", "AI Agent Engineer · Asimov"],
};

export const links = {
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/guilhermeluis/" },
  github: { label: "GitHub", href: "https://github.com/luguimoraes" },
  linktree: { label: "Linktree", href: "https://linktr.ee/luguimoraes" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/luguimoraes/" },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/5512992601452?text=Hi%20Luis%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk!",
  },
} satisfies Record<string, Link>;

export const phoneDisplay = "+55 12 99260-1452";

export const nav = [
  { label: "About", id: "sobre" },
  { label: "Cases", id: "projetos" },
  { label: "Toolkit", id: "ferramentas" },
  { label: "Career", id: "trajetoria" },
  { label: "Contact", id: "contato" },
];

export const casesIntro =
  "Client projects are shown through my role and the process, without internal screens or data.";

export const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "gauge",
    title: "Data before opinion",
    text: "Adoption, NPS and churn indicators drive the conversation with the sponsor.",
  },
  {
    icon: "chat",
    title: "Bring the customer's voice in",
    text: "What the customer says becomes input for product, process and playbooks.",
  },
  {
    icon: "bot",
    title: "Automate the repetitive",
    text: "A task that repeats every week becomes a script, a cadence or an agent.",
  },
  {
    icon: "target",
    title: "Clear goal, short plan",
    text: "I agree on the outcome with the customer and break the path into steps we can measure.",
  },
];

export const aiBlock = {
  eyebrow: "AI in my day to day",
  statement: "AI speeds things up. I'm the one accountable to the customer.",
  points: [
    {
      title: "Context before the prompt",
      text: "Every agent starts from a real portfolio process, in the exact format the platform accepts.",
    },
    {
      title: "Human review, always",
      text: "Nothing reaches the customer without me reading it. The agent drafts; I decide.",
    },
    {
      title: "Customer data stays protected",
      text: "What belongs to the customer stays in the account. Tools only do what is allowed.",
    },
  ],
};

export const careerIntro =
  "Support, corporate benefits, logistics, marketing and SaaS: different contexts that shaped a way of caring for customers with method and data.";

export const career: CareerItem[] = [
  {
    period: "2025 – now",
    title: "Enterprise with data and AI",
    role: "Senior CSM · SenseData Enterprise",
    company: "ZENVIA",
    note: "Large accounts in technology, logistics, healthcare and education. Expansion into Zenvia Customer Cloud and Movidesk.",
    icon: "chart",
    logos: [{ src: "/logos/zenvia.png", alt: "ZENVIA" }],
  },
  {
    period: "2023 – 2025",
    title: "Mentoring business owners",
    role: "Senior Customer Success Analyst",
    company: "4blue",
    note: "I supported business owners in finance, marketing, people and strategy in the Máquina de Lucros program.",
    icon: "bulb",
    logos: [{ src: "/logos/4blue.png", alt: "4blue" }],
  },
  {
    period: "2023 – 2025",
    title: "Logistics at scale",
    role: "Customer Success Analyst · Mercado Envios",
    company: "Mercado Livre",
    note: "Retention, cross-sell and solving operational and financial issues across the portfolio.",
    icon: "box",
    logos: [{ src: "/logos/mercado-livre.png", alt: "Mercado Livre" }],
  },
  {
    period: "2022 – 2023",
    title: "Enterprise corporate benefits",
    role: "Senior Customer Success Analyst · Enterprise",
    company: "Wellhub",
    note: "Large pharma and tech accounts, working side by side with HR to manage the benefit.",
    icon: "heart",
    logos: [{ src: "/logos/wellhub.png", alt: "Wellhub" }],
  },
  {
    period: "2022 – 2023",
    title: "Data for medical marketing",
    role: "Business Analyst",
    company: "Ápex Bloom",
    note: "KPIs, NPS and SQL to tune campaigns and expand contracts.",
    icon: "megaphone",
    logos: [{ src: "/logos/apex-bloom.png", alt: "Ápex Bloom" }],
  },
  {
    period: "2021 – 2022",
    title: "The voice of the customer",
    role: "Customer Experience Analyst · Offboarding",
    company: "QuintoAndar",
    note: "Insights from support taken to product, process and marketing.",
    icon: "house",
    logos: [{ src: "/logos/quintoandar.png", alt: "QuintoAndar" }],
  },
  {
    period: "2020 – 2021",
    title: "First step in CS",
    role: "Customer Success Analyst",
    company: "mLabs",
    note: "Entrepreneurs, social media and digital marketing: where I learned to track success metrics.",
    icon: "phone",
    logos: [{ src: "/logos/mlabs.png", alt: "mLabs" }],
  },
  {
    period: "2013 – 2020",
    title: "The construction site as a school",
    role: "Engineering and planning",
    company: "Petrobras, MRV and builders",
    note: "Contracts, schedules and costs: I learned to measure before changing anything.",
    icon: "helmet",
    logos: [{ src: "/logos/petrobras.png", alt: "Petrobras" }, { src: "/logos/mrv.png", alt: "MRV" }],
  },
];

export const education = [
  { period: "2026 – 2027", title: "MBA in Data Science, AI and Analytics", school: "USP/Esalq", status: "In progress" },
  { period: "2026 – 2027", title: "AI Agent Engineer program", school: "Asimov Academy", status: "In progress" },
  { period: "2022 – 2023", title: "Project Management extension", school: "Escola DNC", status: "Completed" },
  { period: "2018 – 2023", title: "Civil Engineering", school: "Universidade Paulista", status: "Completed" },
];

export const tools = ["Python", "SQL", "Google Sheets", "SenseData", "Lovable", "Claude", "Trello", "Asana"];

export const languages = ["Portuguese", "English", "Spanish"];

export const toolkit: { title: string; icon: IconName; text: string; items: string[] }[] = [
  {
    title: "Data and BI",
    icon: "chart",
    text: "I query data at the source, write the KPI queries and build the dashboards that track results.",
    items: ["PostgreSQL", "KPI queries", "Dashboards", "Looker Studio", "Power BI", "Metabase", "Google Sheets"],
  },
  {
    title: "CS operations",
    icon: "headset",
    text: "I structure the portfolio by tier, segment the service and apply retention best practices.",
    items: ["Customer tiering", "Segmentation", "Retention playbooks", "Support bots", "SenseData", "Zendesk", "Jira", "CRM"],
  },
  {
    title: "AI and automation",
    icon: "bot",
    text: "I turn repetitive tasks into skills, scripts and bots, always with human review before the customer.",
    items: ["Claude", "Python", "Lovable"],
  },
];

export const metrics: { name: string; text: string }[] = [
  { name: "MRR", text: "Monthly recurring revenue of the portfolio." },
  { name: "NRR", text: "Revenue retained from the base, adding expansion and subtracting churn and downgrade." },
  { name: "GRR", text: "Revenue retained without expansion: shows how well the base holds." },
  { name: "Churn", text: "Customers or revenue lost in the period." },
  { name: "Health Score", text: "Account health based on usage, engagement and relationship." },
  { name: "NPS", text: "How likely the customer is to recommend the company." },
  { name: "CSAT", text: "Satisfaction with a specific interaction or delivery." },
  { name: "SLA", text: "Agreed response and resolution times." },
  { name: "TTV", text: "Time until the customer sees the first value from the product." },
  { name: "Adoption", text: "Actual use of the features the customer pays for." },
  { name: "Expansion", text: "Upsell and cross-sell within the base." },
  { name: "LTV", text: "Customer value across the whole relationship." },
];

export const about = {
  title: "About me",
  paragraphs: [
    "I have a degree in Civil Engineering and built my career in Customer Success across SaaS, logistics, corporate benefits, marketing and real estate. Everywhere, I learned the same thing: customers stay when they see value.",
    "Today I manage SenseData enterprise accounts at ZENVIA and build AI agents for day-to-day CS work. I'm studying Data Science and AI at USP/Esalq to bring more method to the portfolio.",
  ],
  caption: "A customer who sees value doesn't need to be convinced to stay.",
};

export const contact = {
  title: "Let's work together?",
  text: "For Customer Success opportunities, data and AI projects for CS, or a good conversation about portfolios. WhatsApp is the fastest way to reach me.",
};

export const ui = {
  lang: "en",
  meta: {
    title: "Luis Moraes · Customer Success Manager",
    description: profile.intro,
    ogAlt: "Luis Moraes · Customer Success Manager · Portfolio",
    ogLabel: "PORTFOLIO",
    ogTagline: "Data, automation and AI for Customer Success.",
    ogAward: "Silver · ClienteSA Award 2023",
    ogCases: "CS and AI cases",
  },
  header: {
    sections: "Sections",
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
    switchLang: "PT",
    switchLangLabel: "Ver esta página em português",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    seeCases: "See projects",
    seeLinkedin: "See LinkedIn",
    workedAt: "Where I've worked",
    studying: "Studying now",
  },
  about: {
    eyebrow: "Who I am",
    links: "All links",
    cta: "See my career",
    artTitle:
      "Illustration of a Customer Success desk: laptop with a KPI dashboard, NPS gauge, headset and coffee",
  },
  contact: { whatsapp: "Message me on WhatsApp" },
  sections: {
    casesEyebrow: "Cases",
    casesTitle: "Selected work",
    howEyebrow: "How I work",
    howTitle: "Four habits I bring to every portfolio",
    toolsEyebrow: "Toolkit",
    toolsTitle: "Data, operations and AI serving the portfolio",
    toolsAside: "The tools and metrics I use to query data, build KPIs, segment customers and retain revenue.",
    careerEyebrow: "Career",
    careerTitle: "Not everything started in Customer Success.",
    today: "Today",
    eduEyebrow: "Education",
    eduTitle: "Learning in public",
    tools: "Tools",
    languages: "Languages",
    inProgress: "In progress",
    metricsEyebrow: "Metrics I track",
    metricsTitle: "The language of the portfolio",
    metricsText: "Retention, revenue and experience: the indicators I use to read each account's health and prioritize action.",
  },
  cases: {
    internal: "Internal project",
    read: "Read the case",
    back: "Back to cases",
    role: "Role",
    focus: "Focus",
    summary: "Summary",
    inThisCase: "In this case",
    process: "Process",
    impact: "Impact",
    links: "Links",
    tools: "Tools",
    processTitle: (n: number) => `The process in ${n} steps`,
    stepsHint: "Tap a step to read the details.",
    stepsLabel: "Process steps",
    stepOf: (i: number, n: number) => `Step ${i} of ${n}`,
    prev: "← Previous",
    next: "Next →",
    others: "Other cases",
  },
  footer: {
    nav: "Navigation",
    navLabel: "Footer navigation",
    elsewhere: "Elsewhere",
    top: "Back to top",
  },
};
