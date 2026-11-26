// Todo o texto do site fica aqui. Para atualizar um case ou a trajetória,
// edite só este arquivo.
import type { IconName } from "@/components/icons";
import type { CaseArtName } from "@/components/illustrations";

export type Link = { label: string; href: string };

export type CaseStudy = {
  slug: string;
  art: CaseArtName;
  title: string;
  context: string; // período · onde · tipo
  summary: string;
  highlight: string; // resultado em uma linha
  problem: string;
  whatIDid: string;
  tags: string[];
  link?: Link;
};

export const profile = {
  name: "Luis Moraes",
  firstName: "Luis",
  fullName: "Luis Guilherme de Moraes",
  role: "Customer Success Manager",
  badge: "CSM Sr na ZENVIA · construindo agentes de IA para CS",
  headline: "Customer Success com dados, automação e IA.",
  intro:
    "Mais de quatro anos em Customer Success e CX, hoje com contas enterprise da SenseData na ZENVIA. Construo as ferramentas que uso no dia a dia: automações, painéis e agentes de IA. Antes de CS, a engenharia civil e o planejamento de obras me ensinaram a medir antes de mudar.",
  location: "São Paulo, SP",
  // Coloque a foto em public/ (ex.: public/luis.jpg) e preencha o caminho.
  photo: "/luis.jpg" as string | null,
  // Preencha só se quiser o e-mail público no site.
  email: null as string | null,
  orbit: "CUSTOMER SUCCESS · DADOS · AUTOMAÇÃO · IA · CX · ",
  workedAt: ["ZENVIA", "Mercado Livre", "Wellhub", "QuintoAndar", "mLabs", "4blue"],
  studying: ["MBA Data Science e IA · USP/Esalq", "Engenheiro de Agentes de IA · Asimov"],
};

export const links = {
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/guilhermeluis/" },
  github: { label: "GitHub", href: "https://github.com/luguimoraes" },
  linktree: { label: "Linktree", href: "https://linktr.ee/luguimoraes" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/luguimoraes/" },
} satisfies Record<string, Link>;

export const nav = [
  { label: "Projetos", href: "#projetos" },
  { label: "Como trabalho", href: "#como-trabalho" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export const casesIntro =
  "Projetos com clientes aparecem pelo meu papel e pelo processo, sem telas nem dados internos.";

export const cases: CaseStudy[] = [
  {
    slug: "skills-cs",
    art: "skills",
    title: "Skills de IA para Customer Success",
    context: "2026 · ZENVIA · SenseData",
    summary:
      "Agentes para o Claude que classificam o cliente na jornada da carteira, montam KPIs da Visão 360 e guiam a configuração de ETL, regras e réguas.",
    highlight: "O conhecimento da plataforma virou ferramenta reutilizável, no formato exato que cada campo aceita.",
    problem:
      "Configurar regras, KPIs e notas de jornada no SenseData exige consultar documentação longa e repetir formatos rígidos, conta por conta.",
    whatIDid:
      "Escrevi skills que classificam o cliente na fase do CS Feeling e escrevem a nota do card, criam e validam o JSON dos KPIs e orientam o SenseConnect.",
    tags: ["Claude", "Engenharia de prompt", "SQL", "SenseData"],
  },
  {
    slug: "clipador",
    art: "clipper",
    title: "Clipador de lives",
    context: "2026 · Projeto pessoal · Python",
    summary:
      "Programa que acompanha uma live da Twitch, detecta os melhores momentos pelo áudio e pelo chat e manda a prévia no Telegram para aprovar ou descartar.",
    highlight: "Só grava canais que liberam cortes publicamente e calcula quando cada corte pode ser postado.",
    problem: "Achar os melhores momentos em horas de live toma tempo, e postar corte sem permissão derruba o canal.",
    whatIDid:
      "Montei a captura com Streamlink e ffmpeg, a detecção por volume e ritmo do chat e o fluxo de aprovação pelo Telegram.",
    tags: ["Python", "ffmpeg", "Streamlink", "Telegram"],
  },
  {
    slug: "reducao-custo",
    art: "cost",
    title: "Redução de custo na indústria",
    context: "2022 · Escola DNC · Líder de projeto",
    summary:
      "Projeto com um cliente industrial para reduzir o custo médio da chapa, conduzido com Scrum e Green Belt.",
    highlight: "Meta de reduzir 5% até janeiro de 2023, atingida no prazo.",
    problem: "O cliente precisava reduzir em 5% o custo médio da chapa, comparado ao mesmo mês do ano anterior.",
    whatIDid: "Conduzi as reuniões com o cliente, organizei o projeto em sprints e fiz a análise em Excel.",
    tags: ["Scrum", "Green Belt", "Excel", "Gestão de projetos"],
  },
];

export const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "gauge",
    title: "Dados antes da opinião",
    text: "Indicadores de adoção, NPS e churn guiam a conversa com o sponsor.",
  },
  {
    icon: "chat",
    title: "Voz do cliente para dentro",
    text: "O que o cliente diz vira insumo para produto, processo e playbook.",
  },
  {
    icon: "bot",
    title: "Automatizar o repetitivo",
    text: "Tarefa que se repete toda semana vira script, régua ou agente.",
  },
  {
    icon: "target",
    title: "Meta clara, plano curto",
    text: "Combino o resultado com o cliente e quebro o caminho em passos que dá para medir.",
  },
];

export const aiBlock = {
  eyebrow: "IA no meu dia a dia",
  statement: "A IA acelera. Quem responde pelo cliente sou eu.",
  points: [
    {
      title: "Contexto antes do prompt",
      text: "Cada agente nasce de um processo real da carteira, com o formato exato que a plataforma aceita.",
    },
    {
      title: "Revisão humana sempre",
      text: "Nada vai para o cliente sem eu ler. O agente faz o rascunho; a decisão é minha.",
    },
    {
      title: "Dado de cliente protegido",
      text: "O que é do cliente fica na conta. As ferramentas só fazem o que é permitido.",
    },
  ],
};

export type CareerItem = {
  period: string;
  title: string;
  role: string;
  company: string;
  note: string;
  icon: IconName;
};

export const careerIntro =
  "Atendimento, benefício corporativo, logística, marketing e SaaS: contextos diferentes que formaram um jeito de cuidar de cliente com método e dados.";

export const career: CareerItem[] = [
  {
    period: "2025 – hoje",
    title: "Enterprise com dados e IA",
    role: "CSM Sr · SenseData Enterprise",
    company: "ZENVIA",
    note: "Contas de grande porte em tecnologia, logística, saúde e educação. Expansão para Zenvia Customer Cloud e Movidesk.",
    icon: "chart",
  },
  {
    period: "2023 – 2025",
    title: "Mentoria de empresários",
    role: "Analista de Sucesso do Cliente Sr",
    company: "4blue",
    note: "Acompanhei empresários em finanças, marketing, pessoas e estratégia no programa Máquina de Lucros.",
    icon: "bulb",
  },
  {
    period: "2023 – 2025",
    title: "Logística em escala",
    role: "Analista de Sucesso do Cliente · Mercado Envios",
    company: "Mercado Livre",
    note: "Retenção, cross-sell e solução de problemas operacionais e financeiros da carteira.",
    icon: "box",
  },
  {
    period: "2022 – 2023",
    title: "Benefício corporativo enterprise",
    role: "Analista de Sucesso do Cliente Sr · Enterprise",
    company: "Wellhub",
    note: "Grandes contas de farma e tecnologia, lado a lado com o RH na gestão do benefício.",
    icon: "heart",
  },
  {
    period: "2022 – 2023",
    title: "Dados para marketing médico",
    role: "Analista de Negócios",
    company: "Ápex Bloom",
    note: "KPIs, NPS e SQL para ajustar campanhas e expandir contratos.",
    icon: "megaphone",
  },
  {
    period: "2021 – 2022",
    title: "A voz do cliente",
    role: "Analista de Experiência do Cliente · Offboarding",
    company: "QuintoAndar",
    note: "Insights do atendimento levados para produto, processo e marketing.",
    icon: "house",
  },
  {
    period: "2020 – 2021",
    title: "Primeiro passo em CS",
    role: "Analista de Sucesso do Cliente",
    company: "mLabs",
    note: "Empreendedores, redes sociais e marketing digital: onde aprendi a acompanhar métricas de sucesso.",
    icon: "phone",
  },
  {
    period: "2013 – 2020",
    title: "A obra como escola",
    role: "Engenharia e planejamento",
    company: "Petrobras, MRV e construtoras",
    note: "Contratos, cronogramas e custos: aprendi a medir antes de mudar.",
    icon: "helmet",
  },
];

export const education = [
  { period: "2026 – 2027", title: "MBA em Data Science, IA e Analytics", school: "USP/Esalq", status: "Em andamento" },
  { period: "2026 – 2027", title: "Formação Engenheiro de Agentes de IA", school: "Asimov Academy", status: "Em andamento" },
  { period: "2022 – 2023", title: "Extensão em Gestão de Projetos", school: "Escola DNC", status: "Concluído" },
  { period: "2018 – 2023", title: "Engenharia Civil", school: "Universidade Paulista", status: "Concluído" },
];

export const tools = ["Python", "SQL", "Google Sheets", "SenseData", "Lovable", "Claude", "Trello", "Asana"];

export const languages = ["Português", "English", "Español"];
