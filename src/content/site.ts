// Todo o texto do site fica aqui. Para atualizar um case ou a trajetória,
// edite só este arquivo.
import type { IconName } from "@/components/icons";

export type Link = { label: string; href: string };

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

// Seções da home. Os links usam "/#id" para funcionar também nas páginas de case.
export const nav = [
  { label: "Cases", id: "projetos" },
  { label: "Como trabalho", id: "como-trabalho" },
  { label: "Ferramentas", id: "ferramentas" },
  { label: "Trajetória", id: "trajetoria" },
  { label: "Contato", id: "contato" },
];

export const casesIntro =
  "Projetos com clientes aparecem pelo meu papel e pelo processo, sem telas nem dados internos.";

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
  // Ícones oficiais das empresas (favicons), em public/logos.
  logos?: { src: string; alt: string }[];
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
    logos: [{ src: "/logos/zenvia.png", alt: "ZENVIA" }],
  },
  {
    period: "2023 – 2025",
    title: "Mentoria de empresários",
    role: "Analista de Sucesso do Cliente Sr",
    company: "4blue",
    note: "Acompanhei empresários em finanças, marketing, pessoas e estratégia no programa Máquina de Lucros.",
    icon: "bulb",
    logos: [{ src: "/logos/4blue.png", alt: "4blue" }],
  },
  {
    period: "2023 – 2025",
    title: "Logística em escala",
    role: "Analista de Sucesso do Cliente · Mercado Envios",
    company: "Mercado Livre",
    note: "Retenção, cross-sell e solução de problemas operacionais e financeiros da carteira.",
    icon: "box",
    logos: [{ src: "/logos/mercado-livre.png", alt: "Mercado Livre" }],
  },
  {
    period: "2022 – 2023",
    title: "Benefício corporativo enterprise",
    role: "Analista de Sucesso do Cliente Sr · Enterprise",
    company: "Wellhub",
    note: "Grandes contas de farma e tecnologia, lado a lado com o RH na gestão do benefício.",
    icon: "heart",
    logos: [{ src: "/logos/wellhub.png", alt: "Wellhub" }],
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
    logos: [{ src: "/logos/quintoandar.png", alt: "QuintoAndar" }],
  },
  {
    period: "2020 – 2021",
    title: "Primeiro passo em CS",
    role: "Analista de Sucesso do Cliente",
    company: "mLabs",
    note: "Empreendedores, redes sociais e marketing digital: onde aprendi a acompanhar métricas de sucesso.",
    icon: "phone",
    logos: [{ src: "/logos/mlabs.png", alt: "mLabs" }],
  },
  {
    period: "2013 – 2020",
    title: "A obra como escola",
    role: "Engenharia e planejamento",
    company: "Petrobras, MRV e construtoras",
    note: "Contratos, cronogramas e custos: aprendi a medir antes de mudar.",
    icon: "helmet",
    logos: [{ src: "/logos/petrobras.png", alt: "Petrobras" }, { src: "/logos/mrv.png", alt: "MRV" }],
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

// Caixa de ferramentas de CS: o que eu uso no dia a dia, por grupo.
export const toolkit: { title: string; icon: IconName; text: string; items: string[] }[] = [
  {
    title: "Dados e BI",
    icon: "chart",
    text: "Consulto os dados direto na fonte, escrevo as queries dos KPIs e monto os painéis que acompanham o resultado.",
    items: ["PostgreSQL", "Queries de KPI", "Dashboards", "Looker Studio", "Power BI", "Metabase", "Google Sheets"],
  },
  {
    title: "Operação de CS",
    icon: "headset",
    text: "Estruturo a carteira por tier, segmento o atendimento e aplico as melhores práticas de retenção.",
    items: ["Tiering de clientes", "Segmentação", "Playbooks de retenção", "Bots de atendimento", "SenseData", "Zendesk", "Jira", "CRM"],
  },
  {
    title: "IA e automação",
    icon: "bot",
    text: "Transformo tarefas repetitivas em skills, scripts e bots, sempre com revisão humana antes do cliente.",
    items: ["Claude", "Python", "Lovable"],
  },
];

export const metrics: { name: string; text: string }[] = [
  { name: "MRR", text: "Receita recorrente mensal da carteira." },
  { name: "NRR", text: "Receita retida da base, somando expansão e descontando churn e downgrade." },
  { name: "GRR", text: "Receita retida sem contar expansão: mostra o quanto a base segura." },
  { name: "Churn", text: "Clientes ou receita perdidos no período." },
  { name: "Health Score", text: "Saúde da conta a partir de uso, engajamento e relacionamento." },
  { name: "NPS", text: "O quanto o cliente recomendaria a empresa." },
  { name: "CSAT", text: "Satisfação com um atendimento ou entrega específica." },
  { name: "SLA", text: "Prazo combinado de resposta e de solução." },
  { name: "TTV", text: "Tempo até o cliente ver o primeiro valor do produto." },
  { name: "Adoção", text: "Uso real dos recursos contratados." },
  { name: "Expansão", text: "Upsell e cross-sell dentro da base." },
  { name: "LTV", text: "Valor do cliente ao longo de toda a relação." },
];
