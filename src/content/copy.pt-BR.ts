/**
 * Fonte central de todo copy de UI do site (pt-BR).
 * Componentes consomem chaves daqui — nunca strings literais no JSX.
 * Um novo idioma é um novo arquivo (`copy.en.ts`) espelhando estas mesmas chaves.
 * Ver "Arquitetura de copy" em singular-agency-style-reference.md.
 */
export const copy = {
  meta: {
    siteName: "Singular Agency",
    title: "Singular Agency — Performance em Google Ads e Meta Ads",
    description:
      "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium. Diagnóstico gratuito em até 48h.",
  },
  nav: {
    items: [
      { label: "Serviços", href: "#servicos" },
      { label: "Cases", href: "#cases" },
      { label: "Sobre", href: "#sobre" },
      { label: "Recursos", href: "#recursos" },
      { label: "Contato", href: "#contato" },
    ],
    cta: "Falar com a gente",
  },
  hero: {
    eyebrow: "Performance · Google Ads · Meta Ads",
    headline: "Marcas mais relevantes para um",
    headlineAccent: "mundo real.",
    sub: "Uma agência de performance que pensa como estúdio de marca: mídia paga gerida com o rigor de quem lê dado todo dia — e a régua estética de quem nunca entrega o óbvio.",
    ctaPrimary: "Falar com a gente",
    ctaSecondary: "Ver resultados reais",
    imageAlt:
      "Fotografia editorial em preto e branco de ambiente arquitetônico com luz dura diagonal e um único recorte de cor laranja",
  },
  marquee: {
    eyebrow: "Marcas que confiam na Singular",
    clients: [
      "NORTHFIELD",
      "VÖLK CAPITAL",
      "CASA ALECRIM",
      "GRÃO & CIA",
      "GRUPO ALTIVA",
      "MOOV",
      "PORTAL BRASIL",
      "ÁGATA STUDIO",
    ],
  },
  services: {
    eyebrow: "O que fazemos",
    headline: "Seis frentes, uma única régua de exigência.",
    items: [
      {
        number: "01",
        title: "Google Ads",
        body: "Tráfego pago que paga a conta. Campanhas de Pesquisa, Performance Max e Shopping otimizadas por LTV, não por clique barato.",
        href: "/servicos/google-ads",
      },
      {
        number: "02",
        title: "Meta Ads",
        body: "Criativo e mídia andando juntos. Testamos ângulo, oferta e formato em ciclos rápidos até o CPA fazer sentido pro seu funil.",
        href: "/servicos/meta-ads",
      },
      {
        number: "03",
        title: "SEO",
        body: "Ranqueamento que sobrevive ao algoritmo. Arquitetura técnica, conteúdo de autoridade e dados estruturados — crescimento que não depende de leilão.",
        href: "/servicos/seo",
      },
      {
        number: "04",
        title: "Social Media",
        body: "Presença que constrói marca enquanto vende. Calendário editorial, produção e comunidade — sem feed genérico de agência.",
        href: "/servicos/social-media",
      },
      {
        number: "05",
        title: "Branding",
        body: "Identidade com espinha dorsal estratégica. Posicionamento, verbo e sistema visual pensados pra durar mais que uma campanha.",
        href: "/servicos/branding",
      },
      {
        number: "06",
        title: "Automação & CRM",
        body: "O funil que não esquece um lead. Nutrição, scoring e integração com WhatsApp/CRM pra nenhuma oportunidade esfriar.",
        href: "/servicos/automacao-crm",
      },
    ],
  },
  statementBrand: {
    eyebrow: "Posicionamento",
    headline: "Boas marcas",
    headlineAccent: "não são comuns.",
    lede: "Isso não é slogan — é a régua aplicada em cada estratégia de mídia, cada peça, cada relatório que sai daqui.",
  },
  stats: {
    eyebrow: "Resultados que falam sozinhos",
    items: [
      { value: 50, suffix: "%", decimals: 0, label: "Redução média de CPA em 90 dias" },
      { value: 150, suffix: "M+", decimals: 0, label: "Impressões gerenciadas em 2025" },
      { value: 3.4, suffix: "x", decimals: 1, label: "ROAS médio em campanhas Meta Ads" },
      { value: 38, suffix: "", decimals: 0, label: "Marcas ativas em gestão" },
    ],
  },
  cases: {
    eyebrow: "Cases",
    headline: "Resultado documentado, não prometido.",
    items: [
      {
        sector: "E-commerce",
        client: "Casa Alecrim",
        headline: "R$1 em mídia virou R$4,80 em receita",
        chips: ["+212% receita", "ROAS 4,8x"],
        image: "/images/photography/case-ecommerce.webp",
        imageAlt:
          "Still-life em preto e branco de uma caixa de papelão com uma fita de embalagem em laranja, único recorte de cor da cena",
      },
      {
        sector: "Serviços financeiros",
        client: "Völk Capital",
        headline: "CPL caiu 61% em dois trimestres",
        chips: ["-61% CPL", "+3,2x leads qualificados"],
        image: "/images/photography/case-financeiro.webp",
        imageAlt:
          "Fachada de torre de vidro em preto e branco com uma única janela iluminada em laranja entre janelas escuras",
      },
      {
        sector: "Varejo",
        client: "Grão & Cia",
        headline: "De 4 para 22 lojas rastreadas por performance",
        chips: ["+450% tráfego local", "18 novas praças"],
        image: "/images/photography/case-varejo.webp",
        imageAlt:
          "Interior de loja minimalista em preto e branco com uma arara de roupas onde uma única peça aparece em laranja",
      },
    ],
  },
  testimonial: {
    quote:
      "A Singular não entrega relatório bonito — entrega decisão. A gente sabe exatamente onde cada real de mídia está indo e por quê.",
    attribution: "Marina Kobayashi, Head de Growth — Casa Alecrim",
  },
  statementCta: {
    eyebrow: "Próximo passo",
    headline: "Diferente por",
    headlineAccent: "natureza.",
    lede: "Sem diagnóstico genérico. Em até 48h você recebe um raio-x real da sua operação de mídia atual — o que travar, o que já paga a conta, o que parar de fazer amanhã.",
    cta: "Solicitar diagnóstico gratuito",
  },
  contactForm: {
    eyebrow: "Diagnóstico gratuito",
    headline: "Manda pra gente. A resposta vem de gente, não de robô.",
    fields: {
      name: "Nome",
      email: "E-mail empresarial",
      phone: "WhatsApp / Telefone",
      company: "Empresa",
      budget: "Verba mensal estimada",
      message: "Mensagem",
    },
    budgetOptions: [
      "Até R$5 mil/mês",
      "R$5 mil – R$15 mil/mês",
      "R$15 mil – R$40 mil/mês",
      "Acima de R$40 mil/mês",
    ],
    submit: "Solicitar diagnóstico gratuito",
    submitting: "Enviando…",
    success: "Recebemos sua mensagem. A gente volta em até 1 dia útil.",
    error: "Não deu pra enviar agora. Tenta de novo ou fala direto pelo WhatsApp abaixo.",
  },
  footer: {
    ctaHeadline: "Vamos conversar sobre a sua próxima curva de crescimento?",
    cta: "Falar com a gente",
    about:
      "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding.",
    email: "oi@singularagency.com.br",
    phone: "+55 11 4000-1122",
    columns: [
      {
        title: "Serviços",
        links: [
          { label: "Google Ads", href: "/servicos/google-ads" },
          { label: "Meta Ads", href: "/servicos/meta-ads" },
          { label: "SEO", href: "/servicos/seo" },
          { label: "Social Media", href: "/servicos/social-media" },
          { label: "Branding", href: "/servicos/branding" },
          { label: "Automação & CRM", href: "/servicos/automacao-crm" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre", href: "#sobre" },
          { label: "Time", href: "#sobre" },
          { label: "Carreiras", href: "#sobre" },
          { label: "Contato", href: "#contato" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Blog", href: "/recursos" },
          { label: "Benchmarks de CPA", href: "/recursos" },
          { label: "Guias de mídia paga", href: "/recursos" },
          { label: "Estudos de caso", href: "#cases" },
        ],
      },
      {
        title: "Cases",
        links: [
          { label: "Casa Alecrim", href: "#cases" },
          { label: "Völk Capital", href: "#cases" },
          { label: "Grão & Cia", href: "#cases" },
          { label: "Ver todos os cases", href: "#cases" },
        ],
      },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
    ],
    copyright: `© ${new Date().getFullYear()} Singular Agency. Todos os direitos reservados.`,
  },
} as const;

export type Copy = typeof copy;
