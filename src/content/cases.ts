// Cases completos. Cada case vira uma página em /cases/<slug>
// e um cartão na home. Só fatos verificáveis: o que não foi medido
// aparece como "ainda não medido", nunca como número inventado.
import type { IconName } from "@/components/icons";
import type { CaseArtName } from "@/components/illustrations";
import type { Link } from "./site";

export type Figure =
  | { kind: "art"; art: CaseArtName; caption: string }
  | { kind: "flow"; steps: { icon: IconName; label: string; text: string }[]; caption: string };

export type CaseSection = {
  id: string;
  label: string; // rótulo da coluna esquerda (ex.: "Problema")
  title: string;
  body: string[];
  bullets?: string[];
  quote?: string;
  figure?: Figure;
};

export type ProcessStep = { title: string; tools: string[]; text: string };

export type CaseStudy = {
  slug: string;
  art: CaseArtName;
  title: string;
  subtitle: string;
  meta: string; // linha de contexto acima do título
  role: string;
  focus: string;
  confidential?: string;
  award?: { title: string; detail: string; href: string };
  highlight: string; // frase de destaque no cartão da home
  tags: string[]; // ferramentas e métodos usados (viram selos)
  lead: string; // parágrafo grande do resumo
  intro: string[];
  kpis: { value: string; label: string }[];
  impact: {
    headline: string;
    left: { label: string; text: string };
    right: { label: string; text: string };
    note?: string;
  };
  steps?: ProcessStep[];
  sections: CaseSection[];
  links?: Link[];
};

const allCases: CaseStudy[] = [
  {
    slug: "wellhub-segmentacao-enterprise",
    art: "wellhub",
    title: "Segmentação no atendimento Enterprise",
    subtitle:
      "Como transformar clientes satisfeitos em clientes fiéis: o projeto do time Enterprise reconhecido com Prata no Prêmio ClienteSA 2023.",
    meta: "2022 – 2023 · Wellhub (Gympass) · Enterprise",
    role: "Analista de Sucesso do Cliente Sr · líder do Squad Key Account nas verticais de tecnologia, farmacêutica e indústria",
    focus: "Segmentação · Key Accounts · SLA e CSAT · Metodologia ágil",
    confidential: "Projeto de empresa. Indicadores internos foram omitidos; o resultado público é o prêmio.",
    award: {
      title: "Troféu Prata · Prêmio ClienteSA 2023",
      detail: "Categoria Líder em Projetos de B2B, com o case “Transformando clientes satisfeitos em clientes fiéis”.",
      href: "https://portal.clientesa.com.br/os-melhores-do-cx-brasileiro/",
    },
    highlight: "Reconhecido com o Troféu Prata no Prêmio ClienteSA 2023, na categoria Líder em Projetos de B2B.",
    tags: ["Zendesk", "Jira", "Metodologia ágil", "SLA", "CSAT"],
    lead: "Cliente enterprise satisfeito nem sempre é cliente fiel. O projeto segmentou o atendimento para dar a cada conta o nível de cuidado de que ela precisa, e eu liderei o Squad Key Account dentro dessa mudança.",
    intro: [
      "No Wellhub (antigo Gympass), o benefício de bem-estar é gerido pelo RH das empresas clientes. Nas contas enterprise, cada dúvida do RH sobre a gestão do benefício pesa na relação.",
      "Fui o ponto de contato principal do RH dessas contas e trabalhei lado a lado com os Gerentes de Sucesso do Cliente, numa parceria constante para que nenhuma demanda ficasse sem dono.",
    ],
    kpis: [
      { value: "Prata", label: "no Prêmio ClienteSA 2023, categoria Líder em Projetos de B2B" },
      { value: "3", label: "verticais no Squad Key Account: tecnologia, farmacêutica e indústria" },
      { value: "2", label: "indicadores acompanhados de perto: SLA e CSAT" },
    ],
    impact: {
      headline: "Atendimento no nível certo para cada conta, reconhecido com Prata",
      left: {
        label: "Impacto no atendimento",
        text: "As contas-chave ganharam um squad dedicado e um ponto de contato claro para o RH, com SLA e CSAT acompanhados de perto.",
      },
      right: {
        label: "Impacto no time",
        text: "Squad autogerenciado, com cada cliente e cada reunião registrados no Jira e melhorias de processo levadas às reuniões internas.",
      },
      note: "Os números do projeto são internos. O reconhecimento público é o Troféu Prata do Prêmio ClienteSA 2023.",
    },
    sections: [
      {
        id: "meu-papel",
        label: "Meu papel",
        title: "Ponto de contato do RH e parceiro dos CSMs",
        body: ["Meu trabalho ficava entre o cliente e o time interno:"],
        bullets: [
          "Contato direto e constante com os Gerentes de Sucesso do Cliente.",
          "Ponto de contato principal do RH para dúvidas sobre o gerenciamento do benefício.",
          "Liderança do Squad Key Account, nas verticais de tecnologia, farmacêutica e indústria.",
        ],
        figure: {
          kind: "flow",
          caption: "Como a segmentação organizou o atendimento das contas enterprise.",
          steps: [
            { icon: "target", label: "Segmentar", text: "Contas agrupadas pelo nível de cuidado" },
            { icon: "headset", label: "Squad dedicado", text: "Key Accounts com time próprio" },
            { icon: "gauge", label: "Medir", text: "SLA e CSAT acompanhados de perto" },
            { icon: "trophy", label: "Fidelizar", text: "Satisfação que vira relação longa" },
          ],
        },
      },
      {
        id: "processo-agil",
        label: "Processo",
        title: "Ágil, autogerenciado e com tudo registrado",
        body: [
          "Trabalhamos com mindset ágil, o que deixou o squad autogerenciado e focado em resultado. Cada cliente e cada reunião diária ficavam registrados no Jira, para que todo mundo soubesse o estado de cada conta.",
          "Nas reuniões internas, levei os aprendizados do atendimento para ajustar processos. Também me reuni com o time da Zendesk para melhorar a ferramenta de comunicação que usávamos.",
        ],
        quote: "Satisfação é o ponto de partida. Fidelidade vem do atendimento no nível certo.",
      },
    ],
    links: [
      { label: "Resultado do Prêmio ClienteSA 2023", href: "https://portal.clientesa.com.br/os-melhores-do-cx-brasileiro/" },
    ],
  },
  {
    slug: "skills-ia-customer-success",
    art: "skills",
    title: "Skills de IA para Customer Success",
    subtitle: "O conhecimento da plataforma SenseData virou ferramentas que trabalham no formato exato de cada campo.",
    meta: "2026 · ZENVIA · SenseData Enterprise",
    role: "Criador, de ponta a ponta: mapeamento das tarefas, escrita das skills e uso na carteira",
    focus: "IA aplicada a CS · Engenharia de prompt · SQL · SenseData",
    confidential:
      "Projeto interno. Este case mostra o processo e as decisões; nomes de clientes, dados e telas internas foram omitidos.",
    highlight: "Seis tarefas recorrentes da carteira viraram skills reutilizáveis, sempre com revisão humana no fim.",
    tags: ["Claude", "Engenharia de prompt", "SQL", "SenseData"],
    lead:
      "Uma carteira enterprise exige configurar regras, KPIs, integrações e notas de jornada em formatos rígidos, conta por conta. Transformei essas tarefas em skills para o Claude, cada uma especialista em um pedaço da plataforma.",
    intro: [
      "Na ZENVIA eu cuido de contas enterprise da SenseData, uma plataforma de Customer Success. Boa parte do trabalho é traduzir o objetivo do cliente em configuração: uma regra de churn, um KPI na Visão 360, uma carga de dados no SenseConnect, uma nota de fase no CS Feeling.",
      "Cada uma dessas tarefas tem um formato que o campo aceita e um jeito certo de não quebrar nada. Esse conhecimento ficava espalhado em documentação longa e na memória de quem já tinha errado antes.",
    ],
    kpis: [
      { value: "6", label: "skills, cada uma para uma frente da plataforma" },
      { value: "3", label: "produtos cobertos: SenseData, Zenvia Customer Cloud e Looker Studio" },
    ],
    impact: {
      headline: "Tarefas de formato rígido viraram rascunhos prontos para revisar",
      left: {
        label: "Impacto no meu trabalho",
        text: "Em vez de começar do zero e procurar regra na documentação, parto de um rascunho no formato certo e gasto o tempo na conversa com o sponsor.",
      },
      right: {
        label: "Impacto para o cliente",
        text: "Configurações mais consistentes entre contas, porque cada skill segue o mesmo padrão e as mesmas validações.",
      },
      note: "O ganho de tempo por tarefa ainda não foi medido. Medir é o próximo passo.",
    },
    steps: [
      {
        title: "Escolher a tarefa",
        tools: ["Carteira", "Rotina semanal"],
        text: "Listei o que eu repetia toda semana e o que mais gerava retrabalho. Só virou skill o que tinha formato fixo e regra clara.",
      },
      {
        title: "Documentar o formato",
        tools: ["Central de Ajuda", "SQL"],
        text: "Para cada tarefa, registrei o formato exato que o campo aceita, os erros comuns e exemplos reais anonimizados.",
      },
      {
        title: "Escrever a skill",
        tools: ["Claude", "Markdown"],
        text: "Cada skill tem gatilho claro, passos, validações e o que ela não deve fazer. Uma skill por frente, não um agente genérico.",
      },
      {
        title: "Testar com casos reais",
        tools: ["Contas da carteira"],
        text: "Usei em situações do dia a dia e ajustei onde a saída não batia com o que a plataforma aceita.",
      },
      {
        title: "Revisar e usar",
        tools: ["Revisão humana"],
        text: "A skill entrega o rascunho; eu reviso e decido. Nada vai para o cliente sem passar por mim.",
      },
    ],
    sections: [
      {
        id: "problema",
        label: "Problema",
        title: "Conhecimento espalhado, formato rígido",
        body: [
          "A plataforma tem muitos recursos, e cada um tem seu próprio formato: o JSON de um gráfico customizado, a nota da fase no CS Feeling, a chave de importação de uma integração. Um detalhe errado e o card não renderiza, ou a carga duplica dados.",
          "Repetir isso conta por conta toma tempo que deveria ir para a estratégia com o cliente.",
        ],
      },
      {
        id: "decisao",
        label: "Decisão",
        title: "Uma skill por frente, não um agente que faz tudo",
        body: [
          "Em vez de um assistente genérico, separei por tarefa. Cada skill sabe muito sobre pouca coisa, e por isso erra menos e é fácil de revisar.",
        ],
        bullets: [
          "Jornada da carteira: classifica o cliente na fase do CS Feeling e escreve a nota do card, com frentes, casos de uso, rede de poder e riscos.",
          "KPIs da Visão 360: cria, corrige e valida o JSON de gráficos customizados a partir de uma query SQL.",
          "SenseConnect (ETL): guia conexões, integrações, agendamento e diagnóstico de cargas que duplicam, inativam ou apagam dados.",
          "Configuração do SenseData: regras, playbooks, réguas, NPS/CSAT, renovação e churn.",
          "Zenvia Customer Cloud: roteiro de adoção 30/60/90 dias e auditoria de uso.",
          "Looker Studio e Sense Analytics: fontes, campos calculados e painéis com a identidade do cliente.",
        ],
        figure: {
          kind: "flow",
          caption: "Fluxo de uma skill: da tarefa do dia a dia ao rascunho revisado.",
          steps: [
            { icon: "chat", label: "Pedido", text: "Uma tarefa da carteira" },
            { icon: "bot", label: "Skill", text: "Formato, regras e validações" },
            { icon: "database", label: "Rascunho", text: "No formato que o campo aceita" },
            { icon: "headset", label: "Revisão", text: "Eu decido o que vai ao cliente" },
          ],
        },
      },
      {
        id: "guardrails",
        label: "Cuidados",
        title: "Dado de cliente não sai da conta",
        body: [
          "As skills trabalham com estrutura e formato, não com dados de clientes. Exemplos usados para ensinar foram anonimizados, e nenhum nome de cliente aparece nas instruções.",
        ],
        quote: "A IA faz o rascunho. Quem responde pelo cliente sou eu.",
      },
      {
        id: "proximos-passos",
        label: "Próximos passos",
        title: "Medir e abrir uma versão pública",
        body: [
          "O próximo passo é medir o tempo por tarefa antes e depois das skills, e publicar uma versão sem dados internos para outros profissionais de CS usarem como referência.",
        ],
      },
    ],
  },
  {
    slug: "clipador-de-lives",
    art: "clipper",
    title: "Clipador de lives",
    subtitle: "Um programa que acompanha a live, acha os melhores momentos e só deixa postar o que é permitido.",
    meta: "2026 · Projeto pessoal · Python",
    role: "Projeto pessoal, de ponta a ponta: ideia, código, regras de permissão e operação",
    focus: "Automação · Python · Processamento de áudio e vídeo",
    highlight: "Só grava canais que liberam cortes publicamente e calcula quando cada corte pode ser postado.",
    tags: ["Python", "ffmpeg", "Streamlink", "Telegram"],
    lead:
      "Achar os melhores momentos em horas de live toma tempo, e postar corte sem permissão derruba o canal. O clipador resolve as duas coisas: detecta o momento e cuida da permissão antes de qualquer postagem.",
    intro: [
      "A ideia era alimentar um canal de cortes sem passar a madrugada assistindo live. Mas a parte difícil não era cortar: era cortar o que pode ser postado.",
      "Por isso o projeto começou pela regra, não pelo código: só entram streamers que liberam cortes publicamente, com prova guardada, e cada corte só fica liberado depois do prazo que o streamer definiu.",
    ],
    kpis: [
      { value: "70s", label: "de prévia por momento, enviada no Telegram" },
      { value: "5 min", label: "de live sempre em memória, para não perder o início do momento" },
      { value: "24h", label: "de espera antes de postar, seguindo a regra pública do streamer" },
      { value: "0", label: "placas de vídeo necessárias: roda num notebook comum" },
    ],
    impact: {
      headline: "Piloto rodando, com permissão garantida por regra e não por lembrança",
      left: {
        label: "Impacto no processo",
        text: "A triagem virou um toque no celular: Aproveitar ou Descartar. O vídeo aprovado já sai em 720p com crédito e checklist de postagem.",
      },
      right: {
        label: "Impacto no risco",
        text: "Canal fora da lista é recusado, reprise é ignorada e todo corte recebe a data em que pode ser postado.",
      },
      note: "Ainda não há números de alcance: o canal de cortes começa a publicar na próxima fase.",
    },
    sections: [
      {
        id: "deteccao",
        label: "Detecção",
        title: "Grito e chat: dois sinais para confirmar um momento",
        body: [
          "O programa acompanha o tempo todo o volume do áudio e o ritmo do chat. Um momento só vira prévia quando os dois sobem juntos: o grito do streamer e a reação do público.",
          "Os limites ficam num arquivo de configuração, para ajustar sem mexer no código: se chega prévia demais, aumenta o limite; se está perdendo momentos, diminui.",
        ],
        figure: {
          kind: "flow",
          caption: "Do momento na live ao corte liberado para postar.",
          steps: [
            { icon: "headset", label: "Ouvir", text: "Volume do áudio e ritmo do chat" },
            { icon: "spark", label: "Detectar", text: "Os dois sinais sobem juntos" },
            { icon: "chat", label: "Aprovar", text: "Prévia no Telegram" },
            { icon: "target", label: "Liberar", text: "Data liberada e crédito pronto" },
          ],
        },
      },
      {
        id: "permissao",
        label: "Permissão",
        title: "Crédito não impede derrubada. Permissão escrita, sim",
        body: [
          "Pedir autorização caso a caso tende a ser negado, e só dar crédito não protege o canal. A saída foi trabalhar apenas com quem publicou uma regra clara para cortes.",
        ],
        bullets: [
          "Só grava canais de uma lista de autorizados, com a prova da permissão guardada no projeto.",
          "Não grava reprise: títulos com RERUN ou reprise são ignorados.",
          "Calcula a data liberada de cada corte (fim da live + prazo do streamer) e avisa no Telegram quando chega a hora.",
          "Mostra um alerta quando detecta música contínua, a causa número um de vídeo bloqueado.",
        ],
      },
      {
        id: "entrega",
        label: "Entrega",
        title: "Cada corte sai pronto para postar",
        body: [
          "Ao aprovar, o vídeo original em 720p vai para uma pasta própria junto com um arquivo de postagem: data liberada, crédito pronto para colar e checklist antes de publicar.",
        ],
      },
      {
        id: "proximos-passos",
        label: "Próximos passos",
        title: "IA para escolher o corte e montar o vertical",
        body: ["As próximas fases já estão desenhadas:"],
        bullets: [
          "Terceiro sinal: a chuva de clipes que o próprio público cria, pela API da Twitch.",
          "IA para escolher o corte exato e escrever manchete e legenda.",
          "Montagem vertical 9:16 com legenda, pronta para Shorts, Reels e TikTok.",
        ],
      },
    ],
  },
  {
    slug: "como-fiz-este-site",
    art: "site",
    title: "Como fiz este site",
    subtitle: "O portfólio tratado como produto: referência, Design System, movimento e publicação com revisão.",
    meta: "2026 · Projeto pessoal · Em evolução",
    role: "Projeto pessoal, de ponta a ponta: conteúdo, identidade, código com IA como par e publicação",
    focus: "Next.js · Design System · IA no processo",
    highlight: "Do perfil vazio no GitHub ao site no ar em um dia, com cada decisão registrada em tokens.",
    tags: ["Next.js", "Tailwind CSS", "Claude", "Vercel"],
    lead:
      "Meu GitHub mostrava trabalho de outra pessoa e eu não tinha onde contar o que faço. Tratei o portfólio como um produto de CS: entender quem visita, decidir o que essa pessoa precisa ver primeiro e medir depois.",
    intro: [
      "A referência foi o portfólio da designer Bárbara Annitza. Dele eu levei o processo, não o visual: tokens como contrato, checagem automática e publicação com prévia.",
      "A identidade é minha: azul e laranja, ícones de Customer Success desenhados para o site e uma linguagem de painel de KPIs.",
    ],
    kpis: [
      { value: "1", label: "arquivo de tokens para cores, tipos, espaços e movimento" },
      { value: "2", label: "temas, claro e escuro, vindos dos mesmos tokens" },
      { value: "16", label: "ícones de CS desenhados em SVG para o site" },
      { value: "0", label: "cores soltas no código: uma checagem automática barra" },
    ],
    impact: {
      headline: "Um portfólio fácil de atualizar, com o perfil do GitHub apontando para ele",
      left: {
        label: "Impacto no perfil",
        text: "O GitHub deixou de mostrar trabalho de terceiros e ganhou um README com cases, trajetória e link para o site.",
      },
      right: {
        label: "Impacto na manutenção",
        text: "Todo o texto fica em um arquivo de conteúdo. Mudar um case é editar uma linha e enviar; a Vercel publica sozinha.",
      },
      note: "A medição de visitas sem cookies é o próximo passo.",
    },
    steps: [
      {
        title: "Referência e objetivo",
        tools: ["Análise de portfólios", "LinkedIn"],
        text: "Em poucos segundos, quem chega precisa entender que sou CSM e AI Builder e achar o contato. O conteúdo veio do meu LinkedIn, sem inventar números.",
      },
      {
        title: "Identidade",
        tools: ["Azul e laranja", "Ícones SVG"],
        text: "Azul para ação e estrutura, laranja para energia e resultado. Os ícones são de CS: painel, headset, gauge de NPS, robô e banco de dados.",
      },
      {
        title: "Design System",
        tools: ["Tokens", "Tailwind CSS", "Checagem automática"],
        text: "A paleta padrão do Tailwind foi desligada. Só existem as cores dos tokens, e um script barra cor solta ou tamanho fora da escala.",
      },
      {
        title: "Movimento com propósito",
        tools: ["CSS", "IntersectionObserver"],
        text: "Entrada em sequência, seções que surgem ao rolar e cases em pilha. Quem pede menos movimento no sistema vê tudo parado.",
      },
      {
        title: "Do código ao ar",
        tools: ["Claude", "GitHub", "Vercel"],
        text: "Usei o Claude como par de programação. Cada mudança vai para o GitHub, e a Vercel publica a partir da branch principal.",
      },
    ],
    sections: [
      {
        id: "decisoes",
        label: "Decisões",
        title: "O que entrou e o que ficou de fora",
        body: [
          "A primeira versão era limpa, mas parada, e foi recusada. A segunda ganhou movimento, ícones e a estrutura de cases que você está lendo agora.",
        ],
        bullets: [
          "Telefone e e-mail ficaram fora do site; o contato é pelo LinkedIn.",
          "Nomes de clientes não aparecem, mesmo os que estão no LinkedIn.",
          "Números só entram quando foram medidos; o resto aparece como próximo passo.",
        ],
        quote: "A IA acelera a execução. O critério sobre o que vai ao ar continua sendo meu.",
      },
    ],
    links: [
      { label: "Código do site no GitHub", href: "https://github.com/luguimoraes/portfolio" },
      { label: "Perfil no GitHub", href: "https://github.com/luguimoraes" },
    ],
  },
  {
    slug: "apex-bloom-cx-cs-medicos",
    art: "apex",
    title: "CX e CS na retenção de médicos",
    subtitle:
      "Estruturei Customer Experience e Customer Success numa assessoria de marketing digital para médicos: relações mais sólidas, menos churn e uma base que cresceu.",
    meta: "2022 – 2023 · Ápex Bloom · Marketing digital para médicos",
    role: "Analista de Negócios · liderança na implementação e no aprimoramento de CX e CS",
    focus: "Retenção · Feedback estruturado · Segmentação premium",
    confidential: "Os números do projeto não são divulgados. O case mostra o processo e os resultados.",
    highlight: "Churn em queda, base de médicos em crescimento e um serviço premium para quem buscava atendimento diferenciado.",
    tags: ["Google Sheets", "SQL", "Trello", "Asana", "WhatsApp", "NPS"],
    lead: "Uma assessoria de marketing digital para médicos precisava manter os clientes por perto. Liderei a implementação da área de CX e CS: sessões de resultado toda semana, feedback virando dado e um serviço segmentado para quem queria mais.",
    intro: [
      "Médico não tem tempo para ler relatório. O desafio era mostrar, de forma simples e frequente, o que as campanhas nas redes sociais estavam trazendo, e ouvir o que precisava mudar antes que a insatisfação virasse cancelamento.",
    ],
    kpis: [
      { value: "Semanal", label: "sessão estratégica com os médicos para mostrar o impacto das campanhas" },
      { value: "↓ churn", label: "redução significativa do churn depois da área de CX e CS" },
      { value: "↑ base", label: "crescimento expressivo do quadro de médicos atendidos" },
    ],
    impact: {
      headline: "Relações mais sólidas, menos churn e mais médicos na base",
      left: {
        label: "Impacto na retenção",
        text: "Com sessões semanais e feedback estruturado, os médicos passaram a enxergar o resultado das campanhas, e o churn caiu de forma significativa.",
      },
      right: {
        label: "Impacto no negócio",
        text: "A base de médicos cresceu de forma expressiva, com uma oferta premium segmentada para quem buscava atendimento diferenciado.",
      },
      note: "Os números exatos são confidenciais.",
    },
    sections: [
      {
        id: "sessoes",
        label: "Relacionamento",
        title: "Resultado mostrado toda semana",
        body: [
          "Conduzi reuniões regulares com os médicos para apresentar o impacto das campanhas de marketing digital e avaliar o desempenho nas redes sociais. A conversa saiu do “como está indo?” para “o que os dados mostram e o que fazemos agora”.",
          "Para isso, acompanhei KPIs e NPS das campanhas, usei SQL para extrair e tratar dados e mantive comunicação ativa pelo WhatsApp, com atualizações em planilhas.",
        ],
      },
      {
        id: "feedback",
        label: "Melhoria contínua",
        title: "Feedback que vira dado",
        body: [
          "Introduzi a cultura de feedback estruturado: pesquisas regulares com os médicos transformaram opinião em dado. Com isso, deu para achar a causa raiz dos problemas e priorizar o que melhorar.",
        ],
        figure: {
          kind: "flow",
          caption: "O ciclo de feedback com os médicos.",
          steps: [
            { icon: "chat", label: "Ouvir", text: "Pesquisa regular com os médicos" },
            { icon: "chart", label: "Medir", text: "Respostas viram indicadores" },
            { icon: "target", label: "Causa raiz", text: "O que de fato gera insatisfação" },
            { icon: "spark", label: "Melhorar", text: "Ação e retorno ao médico" },
          ],
        },
      },
      {
        id: "crescimento",
        label: "Crescimento",
        title: "Segmentação premium",
        body: [
          "Com a base crescendo, implementei uma estratégia de segmentação: serviços diferenciados e personalizados para os médicos que buscavam atendimento premium.",
        ],
      },
      {
        id: "produtividade",
        label: "Time",
        title: "Uma ferramenta de workspace para o time",
        body: [
          "Participei da implementação de uma ferramenta de workspace e dos fluxos internos no Trello e no Asana, o que aumentou a produtividade e o engajamento do time para metas mais ambiciosas.",
        ],
        quote: "Médico que vê o resultado toda semana não precisa ser convencido a ficar.",
      },
    ],
  },
  {
    slug: "quintoandar-tarefas-canceladas",
    art: "quintoandar",
    title: "Menos tarefas canceladas no Offboarding",
    subtitle: "Dados, padronização e automação para reduzir o retrabalho na operação de Offboarding.",
    meta: "2021 – 2022 · QuintoAndar · Offboarding",
    role: "Analista de Experiência do Cliente Pleno · projeto de otimização operacional",
    focus: "Dados · Padronização · Automação · DMAIC",
    confidential: "Os números do projeto não são divulgados. O case mostra o processo e os resultados.",
    highlight: "Templates padronizados e e-mails automáticos reduziram de forma significativa as tarefas canceladas.",
    tags: ["Google Sheets", "CRM", "Google Slides", "Jira", "DMAIC"],
    lead: "Tarefa cancelada é retrabalho para o time e espera para o cliente. Usamos dados para achar onde as tarefas falhavam, padronizamos templates e automatizamos a correção.",
    intro: [
      "O projeto nasceu da busca por eficiência operacional: em vez de corrigir caso a caso, olhar os dados para entender por que as tarefas eram canceladas e atacar a causa.",
    ],
    kpis: [
      { value: "↓", label: "redução significativa no número de tarefas canceladas" },
      { value: "Auto", label: "e-mail disparado na hora para corrigir cada tarefa cancelada" },
      { value: "DMAIC", label: "método usado do diagnóstico ao controle" },
    ],
    impact: {
      headline: "Menos tarefas canceladas e correção imediata quando acontece",
      left: {
        label: "Impacto na operação",
        text: "Templates padronizados reduziram de forma significativa as tarefas canceladas, e a automação respondeu mais rápido às que ainda aconteciam.",
      },
      right: {
        label: "Impacto entre áreas",
        text: "As áreas passaram a entender o processo umas das outras, com treinamentos específicos onde os erros se concentravam.",
      },
      note: "Os números exatos são confidenciais.",
    },
    steps: [
      {
        title: "Definir",
        tools: ["Google Slides", "Jira"],
        text: "Delimitamos o problema: tarefas canceladas geravam retrabalho e atraso na operação de Offboarding.",
      },
      {
        title: "Medir",
        tools: ["Google Sheets", "CRM"],
        text: "Levantamos os dados de tarefas canceladas para ver quantas, onde e por quê.",
      },
      {
        title: "Analisar",
        tools: ["Google Sheets"],
        text: "Cruzamos os dados para achar oportunidades de melhoria e a causa raiz dos cancelamentos.",
      },
      {
        title: "Melhorar",
        tools: ["Templates", "Automação"],
        text: "Padronizamos os templates e criamos o disparo automático de e-mail para corrigir na hora cada tarefa cancelada.",
      },
      {
        title: "Controlar",
        tools: ["Treinamentos", "Indicadores"],
        text: "Integramos as áreas envolvidas com treinamentos específicos e acompanhamos o desempenho do processo.",
      },
    ],
    sections: [
      {
        id: "padronizacao",
        label: "Padronização",
        title: "O template certo evita o cancelamento",
        body: [
          "A análise de dados mostrou onde estavam as oportunidades de melhoria. Padronizar os templates atacou a causa dos cancelamentos, não só o sintoma.",
        ],
      },
      {
        id: "automacao",
        label: "Automação",
        title: "Correção imediata por e-mail",
        body: [
          "Para o que ainda escapava, criamos o disparo automático de e-mails assim que uma tarefa era cancelada, pedindo a correção na hora. A resposta ficou mais rápida e mais precisa.",
        ],
        figure: {
          kind: "flow",
          caption: "Da tarefa cancelada à correção, sem esperar alguém perceber.",
          steps: [
            { icon: "tasks", label: "Cancelou", text: "A tarefa volta com erro" },
            { icon: "mail", label: "E-mail automático", text: "Pede a correção na hora" },
            { icon: "headset", label: "Correção", text: "Ajuste feito por quem abriu" },
            { icon: "chart", label: "Indicador", text: "Acompanhamento das canceladas" },
          ],
        },
      },
      {
        id: "integracao",
        label: "Áreas",
        title: "Entender o processo do outro",
        body: [
          "Promovemos a integração entre as áreas envolvidas para que cada uma entendesse os processos das outras, com treinamentos especializados.",
        ],
        quote: "Antes de automatizar, padronize. Antes de padronizar, meça.",
      },
    ],
  },
  {
    slug: "reducao-de-custo-industria",
    art: "cost",
    title: "Redução de custo na indústria",
    subtitle: "Liderança de um projeto para reduzir o custo médio da chapa de um cliente industrial.",
    meta: "2022 · Escola DNC · Líder de projeto",
    role: "Líder de projeto: condução com o cliente, organização do time e análise",
    focus: "Gestão de projetos · Scrum · Green Belt",
    highlight: "Meta de reduzir 5% até janeiro de 2023, atingida no prazo.",
    tags: ["Scrum", "Green Belt", "Excel", "Gestão de projetos"],
    lead:
      "Um cliente industrial precisava reduzir em 5% o custo médio da chapa até janeiro de 2023, comparado ao mesmo mês do ano anterior. Liderei o projeto pela Escola DNC, de julho a dezembro de 2022.",
    intro: [
      "O projeto fez parte da extensão em Gestão de Projetos da Escola DNC e ficou no meio do caminho entre a engenharia, de onde eu vinha, e o Customer Success, para onde eu ia.",
    ],
    kpis: [
      { value: "5%", label: "de redução no custo médio da chapa, a meta do projeto" },
      { value: "6", label: "meses de projeto, de julho a dezembro de 2022" },
    ],
    impact: {
      headline: "Meta atingida no prazo",
      left: {
        label: "Impacto para o cliente",
        text: "Redução de 5% no custo médio da chapa, comparando janeiro de 2023 com janeiro de 2022.",
      },
      right: {
        label: "Impacto para mim",
        text: "Aprendi a combinar a meta com o cliente e quebrar o caminho em sprints que dá para medir, um hábito que levo para cada carteira.",
      },
    },
    sections: [
      {
        id: "como-conduzi",
        label: "Processo",
        title: "Entender o processo antes de propor",
        body: [
          "Conduzi as reuniões com o cliente para entender as necessidades antes de propor qualquer mudança. Organizei o trabalho com Scrum, usei a abordagem Green Belt para estruturar a análise e fiz as contas em Excel.",
        ],
        quote: "Meta clara, plano curto: combinar o resultado e medir cada passo.",
      },
    ],
  },
];

// Ordem em que os cases aparecem na home e na navegação entre cases.
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
