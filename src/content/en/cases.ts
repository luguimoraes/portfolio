// English version of src/content/cases.ts. Same slugs, same structure.
// Facts only: nothing measured is invented; confidential numbers stay out.
import type { CaseStudy } from "../cases";

export type { CaseStudy, CaseSection, Figure, ProcessStep } from "../cases";

const allCases: CaseStudy[] = [
  {
    slug: "wellhub-segmentacao-enterprise",
    art: "wellhub",
    title: "Segmentation in Enterprise service",
    subtitle:
      "How to turn satisfied customers into loyal ones: the Enterprise team project awarded Silver at the ClienteSA Award 2023.",
    meta: "2022 – 2023 · Wellhub (Gympass) · Enterprise",
    role: "Senior Customer Success Analyst · lead of the Key Account Squad for technology, pharma and industry",
    focus: "Segmentation · Key Accounts · SLA and CSAT · Agile",
    confidential: "Company project. Internal indicators were left out; the public result is the award.",
    award: {
      title: "Silver Trophy · ClienteSA Award 2023",
      detail: "B2B Project Leader category, with the case “Turning satisfied customers into loyal customers”.",
      href: "https://portal.clientesa.com.br/os-melhores-do-cx-brasileiro/",
    },
    highlight: "Awarded the Silver Trophy at the ClienteSA Award 2023, in the B2B Project Leader category.",
    tags: ["Zendesk", "Jira", "Agile", "SLA", "CSAT"],
    lead: "A satisfied enterprise customer is not always a loyal one. The project segmented service so each account gets the level of care it needs, and I led the Key Account Squad within that change.",
    intro: [
      "At Wellhub (formerly Gympass), the wellness benefit is managed by the HR teams of client companies. In enterprise accounts, every HR question about managing the benefit weighs on the relationship.",
      "I was the main point of contact for HR in these accounts and worked side by side with the Customer Success Managers, in a constant partnership so no request was left without an owner.",
    ],
    kpis: [
      { value: "Silver", label: "at the ClienteSA Award 2023, B2B Project Leader category" },
      { value: "3", label: "verticals in the Key Account Squad: technology, pharma and industry" },
      { value: "2", label: "indicators tracked closely: SLA and CSAT" },
    ],
    impact: {
      headline: "The right level of service for each account, awarded Silver",
      left: {
        label: "Impact on service",
        text: "Key accounts got a dedicated squad and a clear point of contact for HR, with SLA and CSAT tracked closely.",
      },
      right: {
        label: "Impact on the team",
        text: "A self-managed squad, with every customer and meeting logged in Jira and process improvements brought to internal meetings.",
      },
      note: "The project's numbers are internal. The public recognition is the Silver Trophy at the ClienteSA Award 2023.",
    },
    sections: [
      {
        id: "meu-papel",
        label: "My role",
        title: "HR's point of contact and the CSMs' partner",
        body: ["My work sat between the customer and the internal team:"],
        bullets: [
          "Direct, constant contact with the Customer Success Managers.",
          "Main point of contact for HR questions about managing the benefit.",
          "Leading the Key Account Squad for technology, pharma and industry.",
        ],
        figure: {
          kind: "flow",
          caption: "How segmentation organized service for enterprise accounts.",
          steps: [
            { icon: "target", label: "Segment", text: "Accounts grouped by level of care" },
            { icon: "headset", label: "Dedicated squad", text: "Key Accounts with their own team" },
            { icon: "gauge", label: "Measure", text: "SLA and CSAT tracked closely" },
            { icon: "trophy", label: "Build loyalty", text: "Satisfaction that becomes a long relationship" },
          ],
        },
      },
      {
        id: "processo-agil",
        label: "Process",
        title: "Agile, self-managed and fully documented",
        body: [
          "We worked with an agile mindset, which made the squad self-managed and focused on results. Every customer and daily meeting was logged in Jira, so everyone knew the status of each account.",
          "In internal meetings, I brought lessons from service to adjust processes. I also met with the Zendesk team to improve the communication tool we used.",
        ],
        quote: "Satisfaction is the starting point. Loyalty comes from the right level of service.",
      },
    ],
    links: [
      { label: "ClienteSA Award 2023 results", href: "https://portal.clientesa.com.br/os-melhores-do-cx-brasileiro/" },
    ],
  },
  {
    slug: "skills-ia-customer-success",
    art: "skills",
    title: "AI skills for Customer Success",
    subtitle: "Knowledge of the SenseData platform became tools that work in the exact format each field accepts.",
    meta: "2026 · ZENVIA · SenseData Enterprise",
    role: "Creator, end to end: mapping the tasks, writing the skills and using them in the portfolio",
    focus: "AI for CS · Prompt engineering · SQL · SenseData",
    confidential:
      "Internal project. This case shows the process and decisions; customer names, data and internal screens were left out.",
    highlight: "Six recurring portfolio tasks became reusable skills, always with human review at the end.",
    tags: ["Claude", "Prompt engineering", "SQL", "SenseData"],
    lead:
      "An enterprise portfolio requires setting up rules, KPIs, integrations and journey notes in rigid formats, account by account. I turned these tasks into Claude skills, each one an expert in a part of the platform.",
    intro: [
      "At ZENVIA I manage enterprise accounts for SenseData, a Customer Success platform. Much of the work is translating the customer's goal into configuration: a churn rule, a KPI in the 360 View, a data load in SenseConnect, a stage note in CS Feeling.",
      "Each of these tasks has a format the field accepts and a right way not to break anything. That knowledge was scattered across long documentation and the memory of whoever had made the mistake before.",
    ],
    kpis: [
      { value: "6", label: "skills, each for one area of the platform" },
      { value: "3", label: "products covered: SenseData, Zenvia Customer Cloud and Looker Studio" },
    ],
    impact: {
      headline: "Rigid-format tasks became drafts ready for review",
      left: {
        label: "Impact on my work",
        text: "Instead of starting from scratch and searching the docs for rules, I start from a draft in the right format and spend the time talking with the sponsor.",
      },
      right: {
        label: "Impact for the customer",
        text: "More consistent configurations across accounts, because every skill follows the same pattern and the same checks.",
      },
      note: "Time saved per task has not been measured yet. Measuring it is the next step.",
    },
    steps: [
      {
        title: "Pick the task",
        tools: ["Portfolio", "Weekly routine"],
        text: "I listed what I repeated every week and what caused the most rework. Only tasks with a fixed format and a clear rule became skills.",
      },
      {
        title: "Document the format",
        tools: ["Help Center", "SQL"],
        text: "For each task, I recorded the exact format the field accepts, common mistakes and real anonymized examples.",
      },
      {
        title: "Write the skill",
        tools: ["Claude", "Markdown"],
        text: "Each skill has a clear trigger, steps, checks and what it must not do. One skill per area, not a generic agent.",
      },
      {
        title: "Test with real cases",
        tools: ["Portfolio accounts"],
        text: "I used them in day-to-day situations and adjusted wherever the output didn't match what the platform accepts.",
      },
      {
        title: "Review and use",
        tools: ["Human review"],
        text: "The skill delivers the draft; I review and decide. Nothing goes to the customer without going through me.",
      },
    ],
    sections: [
      {
        id: "problema",
        label: "Problem",
        title: "Scattered knowledge, rigid formats",
        body: [
          "The platform has many features, and each one has its own format: the JSON of a custom chart, the stage note in CS Feeling, the import key of an integration. One wrong detail and the card doesn't render, or the load duplicates data.",
          "Repeating this account by account takes time that should go to strategy with the customer.",
        ],
      },
      {
        id: "decisao",
        label: "Decision",
        title: "One skill per area, not an agent that does everything",
        body: [
          "Instead of a generic assistant, I split by task. Each skill knows a lot about a little, so it makes fewer mistakes and is easy to review.",
        ],
        bullets: [
          "Portfolio journey: places the customer in the CS Feeling stage and writes the card note, with fronts, use cases, power map and risks.",
          "360 View KPIs: creates, fixes and validates custom chart JSON from a SQL query.",
          "SenseConnect (ETL): guides connections, integrations, scheduling and diagnosing loads that duplicate, deactivate or delete data.",
          "SenseData setup: rules, playbooks, cadences, NPS/CSAT, renewal and churn.",
          "Zenvia Customer Cloud: 30/60/90-day adoption roadmap and usage audit.",
          "Looker Studio and Sense Analytics: sources, calculated fields and dashboards with the customer's visual identity.",
        ],
        figure: {
          kind: "flow",
          caption: "How a skill works: from a daily task to a reviewed draft.",
          steps: [
            { icon: "chat", label: "Request", text: "A portfolio task" },
            { icon: "bot", label: "Skill", text: "Format, rules and checks" },
            { icon: "database", label: "Draft", text: "In the format the field accepts" },
            { icon: "headset", label: "Review", text: "I decide what goes to the customer" },
          ],
        },
      },
      {
        id: "guardrails",
        label: "Safeguards",
        title: "Customer data never leaves the account",
        body: [
          "The skills work with structure and format, not customer data. Teaching examples were anonymized, and no customer name appears in the instructions.",
        ],
        quote: "AI drafts. I'm the one accountable to the customer.",
      },
      {
        id: "proximos-passos",
        label: "Next steps",
        title: "Measure and publish a public version",
        body: [
          "The next step is to measure time per task before and after the skills, and publish a version without internal data for other CS professionals to use as a reference.",
        ],
      },
    ],
  },
  {
    slug: "clipador-de-lives",
    art: "clipper",
    title: "Live stream clipper",
    subtitle: "A program that follows the live stream, finds the best moments and only allows posting what is permitted.",
    meta: "2026 · Personal project · Python",
    role: "Personal project, end to end: idea, code, permission rules and operation",
    focus: "Automation · Python · Audio and video processing",
    highlight: "It only records channels that publicly allow clips and calculates when each clip can be posted.",
    tags: ["Python", "ffmpeg", "Streamlink", "Telegram"],
    lead:
      "Finding the best moments in hours of live streams takes time, and posting clips without permission gets the channel taken down. The clipper solves both: it detects the moment and handles permission before anything is posted.",
    intro: [
      "The idea was to feed a clips channel without spending the night watching streams. But the hard part wasn't cutting: it was cutting what can be posted.",
      "So the project started with the rule, not the code: only streamers who publicly allow clips are included, with proof saved, and each clip is only released after the deadline the streamer set.",
    ],
    kpis: [
      { value: "70s", label: "preview per moment, sent on Telegram" },
      { value: "5 min", label: "of the stream always in memory, so the start of the moment isn't lost" },
      { value: "24h", label: "wait before posting, following the streamer's public rule" },
      { value: "0", label: "graphics cards needed: it runs on a regular laptop" },
    ],
    impact: {
      headline: "Pilot running, with permission guaranteed by a rule, not by memory",
      left: {
        label: "Impact on the process",
        text: "Triage became one tap on the phone: Keep or Discard. The approved video comes out in 720p with credit and a posting checklist.",
      },
      right: {
        label: "Impact on risk",
        text: "Channels outside the list are refused, reruns are ignored and every clip gets the date it can be posted.",
      },
      note: "There are no reach numbers yet: the clips channel starts publishing in the next phase.",
    },
    sections: [
      {
        id: "deteccao",
        label: "Detection",
        title: "Shout and chat: two signals to confirm a moment",
        body: [
          "The program constantly tracks audio volume and chat pace. A moment only becomes a preview when both rise together: the streamer's shout and the audience's reaction.",
          "The thresholds live in a config file, so they can be tuned without touching the code: too many previews, raise the threshold; missing moments, lower it.",
        ],
        figure: {
          kind: "flow",
          caption: "From the moment on stream to a clip cleared for posting.",
          steps: [
            { icon: "headset", label: "Listen", text: "Audio volume and chat pace" },
            { icon: "spark", label: "Detect", text: "Both signals rise together" },
            { icon: "chat", label: "Approve", text: "Preview on Telegram" },
            { icon: "target", label: "Release", text: "Release date and ready credit" },
          ],
        },
      },
      {
        id: "permissao",
        label: "Permission",
        title: "Credit doesn't prevent takedowns. Written permission does",
        body: [
          "Asking for permission case by case tends to get a no, and credit alone doesn't protect the channel. The answer was to work only with those who published a clear rule for clips.",
        ],
        bullets: [
          "It only records channels on an authorized list, with proof of permission saved in the project.",
          "It doesn't record reruns: titles with RERUN or reprise are ignored.",
          "It calculates each clip's release date (end of stream + the streamer's deadline) and notifies on Telegram when the time comes.",
          "It flags continuous music, the number one cause of blocked videos.",
        ],
      },
      {
        id: "entrega",
        label: "Delivery",
        title: "Every clip comes out ready to post",
        body: [
          "On approval, the original 720p video goes to its own folder with a posting file: release date, credit ready to paste and a checklist before publishing.",
        ],
      },
      {
        id: "proximos-passos",
        label: "Next steps",
        title: "AI to pick the cut and build the vertical version",
        body: ["The next phases are already designed:"],
        bullets: [
          "A third signal: the clips the audience itself creates, via the Twitch API.",
          "AI to pick the exact cut and write the headline and caption.",
          "9:16 vertical edit with captions, ready for Shorts, Reels and TikTok.",
        ],
      },
    ],
  },
  {
    slug: "como-fiz-este-site",
    art: "site",
    title: "How I built this site",
    subtitle: "The portfolio treated as a product: reference, design system, motion and publishing with review.",
    meta: "2026 · Personal project · Evolving",
    role: "Personal project, end to end: content, identity, code with AI as a pair and publishing",
    focus: "Next.js · Design System · AI in the process",
    highlight: "From an empty GitHub profile to a live site in one day, with every decision recorded in tokens.",
    tags: ["Next.js", "Tailwind CSS", "Claude", "Vercel"],
    lead:
      "My GitHub showed someone else's work and I had no place to tell what I do. I treated the portfolio like a CS product: understand who visits, decide what that person needs to see first and measure later.",
    intro: [
      "The reference was designer Bárbara Annitza's portfolio. From it I took the process, not the look: tokens as a contract, automated checks and publishing with previews.",
      "The identity is mine: blue and orange, Customer Success icons drawn for the site and a KPI-dashboard language.",
    ],
    kpis: [
      { value: "1", label: "token file for colors, type, spacing and motion" },
      { value: "2", label: "themes, light and dark, from the same tokens" },
      { value: "16", label: "CS icons drawn in SVG for the site" },
      { value: "0", label: "stray colors in the code: an automated check blocks them" },
    ],
    impact: {
      headline: "A portfolio that is easy to update, with the GitHub profile pointing to it",
      left: {
        label: "Impact on the profile",
        text: "GitHub stopped showing third-party work and gained a README with cases, career and a link to the site.",
      },
      right: {
        label: "Impact on maintenance",
        text: "All the copy lives in one content file. Changing a case means editing a line and pushing; Vercel publishes on its own.",
      },
      note: "Cookie-free visit tracking is the next step.",
    },
    steps: [
      {
        title: "Reference and goal",
        tools: ["Portfolio analysis", "LinkedIn"],
        text: "In a few seconds, visitors need to understand I'm a CSM and AI Builder and find the contact. The content came from my LinkedIn, with no invented numbers.",
      },
      {
        title: "Identity",
        tools: ["Blue and orange", "SVG icons"],
        text: "Blue for action and structure, orange for energy and results. The icons are about CS: dashboard, headset, NPS gauge, robot and database.",
      },
      {
        title: "Design System",
        tools: ["Tokens", "Tailwind CSS", "Automated check"],
        text: "Tailwind's default palette was turned off. Only token colors exist, and a script blocks stray colors or sizes outside the scale.",
      },
      {
        title: "Motion with purpose",
        tools: ["CSS", "IntersectionObserver"],
        text: "Staggered entrances, sections that appear on scroll and stacked cases. Anyone who asks the system for less motion sees everything still.",
      },
      {
        title: "From code to live",
        tools: ["Claude", "GitHub", "Vercel"],
        text: "I used Claude as a pair programmer. Every change goes to GitHub, and Vercel publishes from the main branch.",
      },
    ],
    sections: [
      {
        id: "decisoes",
        label: "Decisions",
        title: "What made it in and what was left out",
        body: [
          "The first version was clean but static, and it was rejected. The second gained motion, icons and the case structure you're reading now.",
        ],
        bullets: [
          "Email stayed off the site; contact is through WhatsApp and LinkedIn.",
          "Customer names don't appear, not even the ones on LinkedIn.",
          "Numbers only go in when they were measured; everything else shows up as a next step.",
        ],
        quote: "AI speeds up execution. The judgment about what goes live is still mine.",
      },
    ],
    links: [
      { label: "Site code on GitHub", href: "https://github.com/luguimoraes/portfolio" },
      { label: "GitHub profile", href: "https://github.com/luguimoraes" },
    ],
  },
  {
    slug: "apex-bloom-cx-cs-medicos",
    art: "apex",
    title: "CX and CS to retain doctors",
    subtitle:
      "I structured Customer Experience and Customer Success at a digital marketing agency for doctors: stronger relationships, less churn and a growing base.",
    meta: "2022 – 2023 · Ápex Bloom · Digital marketing for doctors",
    role: "Business Analyst · leading the rollout and improvement of CX and CS",
    focus: "Retention · Structured feedback · Premium segmentation",
    confidential: "The project's numbers are not disclosed. The case shows the process and the results.",
    highlight: "Falling churn, a growing base of doctors and a premium service for those who wanted tailored support.",
    tags: ["Google Sheets", "SQL", "Trello", "Asana", "WhatsApp", "NPS"],
    lead: "A digital marketing agency for doctors needed to keep its clients close. I led the rollout of CX and CS: results sessions every week, feedback turned into data and a segmented service for those who wanted more.",
    intro: [
      "Doctors have no time to read reports. The challenge was to show, simply and often, what the social media campaigns were bringing in, and to hear what needed to change before dissatisfaction turned into cancellation.",
    ],
    kpis: [
      { value: "Weekly", label: "strategy session with doctors to show the impact of the campaigns" },
      { value: "↓ churn", label: "significant churn reduction after the CX and CS area" },
      { value: "↑ base", label: "significant growth in the number of doctors served" },
    ],
    impact: {
      headline: "Stronger relationships, less churn and more doctors in the base",
      left: {
        label: "Impact on retention",
        text: "With weekly sessions and structured feedback, doctors started to see campaign results, and churn dropped significantly.",
      },
      right: {
        label: "Impact on the business",
        text: "The base of doctors grew significantly, with a segmented premium offer for those who wanted tailored support.",
      },
      note: "Exact numbers are confidential.",
    },
    sections: [
      {
        id: "sessoes",
        label: "Relationship",
        title: "Results shown every week",
        body: [
          "I ran regular meetings with the doctors to present the impact of the digital marketing campaigns and review social media performance. The conversation moved from “how is it going?” to “what does the data show and what do we do now”.",
          "To do that, I tracked campaign KPIs and NPS, used SQL to extract and clean data and kept active communication on WhatsApp, with updates in spreadsheets.",
        ],
      },
      {
        id: "feedback",
        label: "Continuous improvement",
        title: "Feedback that becomes data",
        body: [
          "I introduced a culture of structured feedback: regular surveys with the doctors turned opinions into data. That made it possible to find root causes and prioritize what to improve.",
        ],
        figure: {
          kind: "flow",
          caption: "The feedback cycle with the doctors.",
          steps: [
            { icon: "chat", label: "Listen", text: "Regular survey with the doctors" },
            { icon: "chart", label: "Measure", text: "Answers become indicators" },
            { icon: "target", label: "Root cause", text: "What really causes dissatisfaction" },
            { icon: "spark", label: "Improve", text: "Action and follow-up with the doctor" },
          ],
        },
      },
      {
        id: "crescimento",
        label: "Growth",
        title: "Premium segmentation",
        body: [
          "As the base grew, I implemented a segmentation strategy: differentiated, personalized services for doctors who wanted premium support.",
        ],
      },
      {
        id: "produtividade",
        label: "Team",
        title: "A workspace tool for the team",
        body: [
          "I took part in rolling out a workspace tool and the internal workflows in Trello and Asana, which raised the team's productivity and engagement toward more ambitious goals.",
        ],
        quote: "A doctor who sees results every week doesn't need to be convinced to stay.",
      },
    ],
  },
  {
    slug: "quintoandar-tarefas-canceladas",
    art: "quintoandar",
    title: "Fewer canceled tasks in Offboarding",
    subtitle: "Data, standardization and automation to reduce rework in the Offboarding operation.",
    meta: "2021 – 2022 · QuintoAndar · Offboarding",
    role: "Customer Experience Analyst · operational optimization project",
    focus: "Data · Standardization · Automation · DMAIC",
    confidential: "The project's numbers are not disclosed. The case shows the process and the results.",
    highlight: "Standardized templates and automatic emails significantly reduced canceled tasks.",
    tags: ["Google Sheets", "CRM", "Google Slides", "Jira", "DMAIC"],
    lead: "A canceled task means rework for the team and waiting for the customer. We used data to find where tasks failed, standardized templates and automated the fix.",
    intro: [
      "The project came from a push for operational efficiency: instead of fixing case by case, look at the data to understand why tasks were canceled and tackle the cause.",
    ],
    kpis: [
      { value: "↓", label: "significant reduction in the number of canceled tasks" },
      { value: "Auto", label: "email sent right away to fix each canceled task" },
      { value: "DMAIC", label: "method used from diagnosis to control" },
    ],
    impact: {
      headline: "Fewer canceled tasks and an immediate fix when they happen",
      left: {
        label: "Impact on operations",
        text: "Standardized templates significantly reduced canceled tasks, and automation responded faster to the ones that still happened.",
      },
      right: {
        label: "Impact across teams",
        text: "Teams started to understand each other's processes, with targeted training where errors concentrated.",
      },
      note: "Exact numbers are confidential.",
    },
    steps: [
      {
        title: "Define",
        tools: ["Google Slides", "Jira"],
        text: "We framed the problem: canceled tasks caused rework and delays in the Offboarding operation.",
      },
      {
        title: "Measure",
        tools: ["Google Sheets", "CRM"],
        text: "We gathered data on canceled tasks to see how many, where and why.",
      },
      {
        title: "Analyze",
        tools: ["Google Sheets"],
        text: "We cross-checked the data to find improvement opportunities and the root cause of cancellations.",
      },
      {
        title: "Improve",
        tools: ["Templates", "Automation"],
        text: "We standardized templates and set up automatic emails to fix each canceled task right away.",
      },
      {
        title: "Control",
        tools: ["Training", "Indicators"],
        text: "We brought the teams together with targeted training and tracked process performance.",
      },
    ],
    sections: [
      {
        id: "padronizacao",
        label: "Standardization",
        title: "The right template prevents cancellation",
        body: [
          "Data analysis showed where the improvement opportunities were. Standardizing templates tackled the cause of cancellations, not just the symptom.",
        ],
      },
      {
        id: "automacao",
        label: "Automation",
        title: "Immediate fix by email",
        body: [
          "For what still slipped through, we set up automatic emails as soon as a task was canceled, asking for a fix right away. Responses became faster and more accurate.",
        ],
        figure: {
          kind: "flow",
          caption: "From canceled task to fix, without waiting for someone to notice.",
          steps: [
            { icon: "tasks", label: "Canceled", text: "The task comes back with an error" },
            { icon: "mail", label: "Automatic email", text: "Asks for a fix right away" },
            { icon: "headset", label: "Fix", text: "Done by whoever opened it" },
            { icon: "chart", label: "Indicator", text: "Canceled tasks tracked" },
          ],
        },
      },
      {
        id: "integracao",
        label: "Teams",
        title: "Understanding the other team's process",
        body: [
          "We brought the teams involved together so each one understood the others' processes, with specialized training.",
        ],
        quote: "Before automating, standardize. Before standardizing, measure.",
      },
    ],
  },
  {
    slug: "reducao-de-custo-industria",
    art: "cost",
    title: "Cost reduction in manufacturing",
    subtitle: "Leading a project to reduce the average sheet cost for an industrial client.",
    meta: "2022 · Escola DNC · Project lead",
    role: "Project lead: running the client relationship, organizing the team and the analysis",
    focus: "Project management · Scrum · Green Belt",
    highlight: "Goal of a 5% reduction by January 2023, met on time.",
    tags: ["Scrum", "Green Belt", "Excel", "Project management"],
    lead:
      "An industrial client needed to cut the average sheet cost by 5% by January 2023, compared with the same month of the previous year. I led the project through Escola DNC, from July to December 2022.",
    intro: [
      "The project was part of the Project Management extension at Escola DNC and sat halfway between engineering, where I came from, and Customer Success, where I was heading.",
    ],
    kpis: [
      { value: "5%", label: "reduction in average sheet cost, the project goal" },
      { value: "6", label: "months of project, from July to December 2022" },
    ],
    impact: {
      headline: "Goal met on time",
      left: {
        label: "Impact for the client",
        text: "A 5% reduction in average sheet cost, comparing January 2023 with January 2022.",
      },
      right: {
        label: "Impact for me",
        text: "I learned to agree on the goal with the client and break the path into measurable sprints, a habit I bring to every portfolio.",
      },
    },
    sections: [
      {
        id: "como-conduzi",
        label: "Process",
        title: "Understand the process before proposing",
        body: [
          "I ran the meetings with the client to understand their needs before proposing any change. I organized the work with Scrum, used the Green Belt approach to structure the analysis and did the numbers in Excel.",
        ],
        quote: "Clear goal, short plan: agree on the outcome and measure every step.",
      },
    ],
  },
];

const order = [
  "wellhub-segmentacao-enterprise",
  "skills-ia-customer-success",
  "apex-bloom-cx-cs-medicos",
  "quintoandar-tarefas-canceladas",
  "clipador-de-lives",
  "como-fiz-este-site",
  "reducao-de-custo-industria",
];

export const cases: CaseStudy[] = [...allCases].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getNeighbors(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? cases[i - 1] : undefined,
    next: i >= 0 && i < cases.length - 1 ? cases[i + 1] : undefined,
  };
}
