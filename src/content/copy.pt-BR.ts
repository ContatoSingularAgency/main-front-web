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
  // Dados legais da pessoa jurídica por trás da marca — usados no footer,
  // nas páginas de Contato/Privacidade/Termos e no JSON-LD. Telefone/WhatsApp
  // são placeholder (DUMMY) até o número real ser definido.
  company: {
    tradeName: "Singular Agency",
    legalName: "Titan Soluções Tecnológicas LTDA",
    cnpj: "18.495.048/0001-83",
    email: "contato@singularagency.com.br",
    phoneDisplay: "+55 11 4000-1122",
    phoneLink: "+551140001122",
    whatsappDisplay: "+55 11 4000-1122",
    whatsappDigits: "551140001122",
    isPlaceholderPhone: true,
    address: {
      street: "Avenida Luiz José Sereno, 880",
      complement: "Bloco A, Sala 43",
      neighborhood: "Jardim Ermida II",
      zip: "13212-210",
      city: "Jundiaí",
      state: "São Paulo",
      stateCode: "SP",
      country: "Brasil",
    },
  },
  nav: {
    items: [
      { label: "Serviços", href: "#servicos" },
      { label: "Cases", href: "#cases" },
      { label: "Sobre", href: "/sobre" },
      { label: "Recursos", href: "#recursos" },
      { label: "Contato", href: "/contato" },
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

  // Página /contato — dedicada, pensada pro Google entender o site como um
  // negócio real com endereço e canais de contato verificáveis.
  contactPage: {
    meta: {
      title: "Contato",
      description:
        "Fale com a Singular Agency: formulário de diagnóstico gratuito, e-mail, telefone/WhatsApp e endereço. Resposta em até 1 dia útil.",
    },
    eyebrow: "Fale com a gente",
    headline: "Contato",
    lede: "Prefere mandar mensagem, ligar ou aparecer? Qualquer um dos três funciona — a gente responde em até 1 dia útil.",
    channels: [
      {
        label: "E-mail",
        value: "contato@singularagency.com.br",
        href: "mailto:contato@singularagency.com.br",
      },
      {
        label: "Telefone",
        value: "+55 11 4000-1122",
        href: "tel:+551140001122",
      },
      {
        label: "WhatsApp",
        value: "+55 11 4000-1122",
        href: "https://wa.me/551140001122",
      },
    ],
    addressLabel: "Endereço",
  },

  // Página /sobre — narrativa institucional + bloco legal (CNPJ/endereço),
  // ambos relevantes pra sinais de confiança (E-E-A-T) que o Google avalia.
  aboutPage: {
    meta: {
      title: "Quem somos",
      description:
        "A Singular Agency é uma agência de performance em Google e Meta Ads operada pela Titan Soluções Tecnológicas LTDA. Conheça nossa forma de trabalhar.",
    },
    eyebrow: "Quem somos",
    headline: "Autoridade quieta,",
    headlineAccent: "pulso laranja.",
    lede: "A Singular nasceu da aposta de que performance e marca não são times diferentes — são a mesma decisão, só que bem tomada.",
    sections: [
      {
        heading: "Como pensamos",
        paragraphs: [
          "A maior parte do mercado de performance trata mídia paga como um jogo isolado de leilão: quem paga mais clique, aparece mais. A gente discorda. Tráfego pago que não carrega marca é dinheiro queimado em escala — rápido, mas raso.",
          "Por isso, cada estratégia que sai daqui passa pelos mesmos três filtros: ela tem disciplina de dado (estrutura de campanha, mensuração, teste controlado)? Ela carrega uma ideia de marca reconhecível? E ela está construída sobre uma base técnica que o Google consegue indexar, rastrear e confiar?",
        ],
      },
      {
        heading: "O que fazemos",
        paragraphs: [
          "Google Ads, Meta Ads, SEO, Social Media, Branding e Automação & CRM — não como departamentos isolados, mas como uma única operação de crescimento. Um cliente de tráfego pago recebe o mesmo rigor estético que um cliente de branding puro, porque pra gente isso nunca foi opcional.",
        ],
      },
      {
        heading: "Como trabalhamos",
        paragraphs: [
          "Diagnóstico antes de proposta: a gente só fala preço depois de entender a operação real de mídia de quem está do outro lado. Prova antes de promessa: todo resultado que mostramos vem acompanhado de número, não de adjetivo.",
        ],
      },
    ],
    legalHeading: "Dados da empresa",
    legalIntro:
      "A Singular Agency é uma marca operada pela pessoa jurídica abaixo — é ela quem assina contratos, emite nota fiscal e responde legalmente pelos serviços prestados.",
  },

  // Política de Privacidade e LGPD. Conteúdo informativo de referência —
  // recomenda-se revisão jurídica antes da publicação final.
  privacyPage: {
    meta: {
      title: "Política de Privacidade",
      description:
        "Como a Singular Agency coleta, usa, compartilha e protege dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
    },
    eyebrow: "LGPD",
    headline: "Política de Privacidade",
    updatedAt: "Última atualização: 6 de outubro de 2026",
    intro:
      "Esta Política de Privacidade descreve como a Titan Soluções Tecnológicas LTDA, operadora da marca Singular Agency, coleta, usa, armazena, compartilha e protege dados pessoais de visitantes do site e de pessoas que entram em contato pelos nossos canais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
    sections: [
      {
        heading: "1. Quem é o controlador dos dados",
        paragraphs: [
          "O controlador dos dados pessoais tratados neste site é a Titan Soluções Tecnológicas LTDA, CNPJ 18.495.048/0001-83, com sede em Avenida Luiz José Sereno, 880, Bloco A, Sala 43, Jardim Ermida II, CEP 13212-210, Jundiaí/SP, operadora da marca Singular Agency.",
        ],
      },
      {
        heading: "2. Quais dados coletamos",
        paragraphs: [
          "Dados fornecidos voluntariamente: quando você preenche o formulário de contato/diagnóstico, coletamos nome, e-mail, telefone/WhatsApp, empresa, faixa de verba mensal estimada e o conteúdo da mensagem enviada.",
          "Dados de navegação: como a maioria dos sites, usamos ferramentas de analytics (Google Analytics 4 e Google Tag Manager) que coletam automaticamente dados como páginas visitadas, tempo de permanência, origem do tráfego, tipo de dispositivo e navegador, e interações com elementos da página (cliques em botões, envios de formulário).",
        ],
      },
      {
        heading: "3. Para que usamos seus dados",
        paragraphs: [
          "Responder ao seu contato e apresentar um diagnóstico ou proposta comercial.",
          "Entender como o site é usado, para corrigir problemas e melhorar a experiência de navegação.",
          "Medir a performance de campanhas de mídia paga (Google Ads e Meta Ads) que trazem visitantes até o site.",
          "Cumprir obrigações legais e regulatórias, quando aplicável.",
        ],
      },
      {
        heading: "4. Base legal para o tratamento",
        paragraphs: [
          "Tratamos seus dados com base no seu consentimento (ao preencher e enviar o formulário de contato), no legítimo interesse (para analytics e melhoria do site, sempre de forma proporcional e sem afetar seus direitos fundamentais) e, quando aplicável, para execução de procedimentos preliminares a um contrato, a seu pedido.",
        ],
      },
      {
        heading: "5. Com quem compartilhamos dados",
        paragraphs: [
          "Não vendemos seus dados pessoais. Compartilhamos dados estritamente com prestadores de serviço que nos ajudam a operar o site e atender seu contato, sempre no limite necessário para a finalidade:",
          "Resend (envio do e-mail gerado pelo formulário de contato), Google (Analytics 4 e Tag Manager, para medição de tráfego e campanhas) e Vercel (hospedagem e infraestrutura do site).",
        ],
      },
      {
        heading: "6. Cookies",
        paragraphs: [
          "Usamos cookies e tecnologias similares de analytics para entender o uso do site e medir campanhas. Você pode bloquear ou apagar cookies nas configurações do seu navegador a qualquer momento — isso pode limitar algumas funcionalidades do site, mas não impede sua navegação básica.",
        ],
      },
      {
        heading: "7. Por quanto tempo guardamos seus dados",
        paragraphs: [
          "Dados de contato são mantidos pelo tempo necessário para responder à sua solicitação e, caso vire cliente, pelo prazo contratual e pelos prazos legais de guarda de documentos fiscais e contratuais. Dados de analytics são retidos conforme a configuração padrão do Google Analytics 4.",
        ],
      },
      {
        heading: "8. Segurança",
        paragraphs: [
          "Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.",
        ],
      },
      {
        heading: "9. Seus direitos como titular de dados",
        paragraphs: [
          "Nos termos do artigo 18 da LGPD, você pode solicitar a qualquer momento: confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade a outro fornecedor, eliminação dos dados tratados com base no consentimento, informação sobre com quem compartilhamos seus dados, e revogação do consentimento.",
        ],
      },
      {
        heading: "10. Como exercer seus direitos",
        paragraphs: [
          "Para exercer qualquer um desses direitos, entre em contato pelo e-mail contato@singularagency.com.br, informando seu nome completo e o pedido específico. Respondemos em prazo razoável, conforme a LGPD.",
        ],
      },
      {
        heading: "11. Alterações desta política",
        paragraphs: [
          "Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A data da última atualização está sempre indicada no topo desta página.",
        ],
      },
    ],
  },

  // Termos de Uso. Conteúdo informativo de referência — recomenda-se revisão
  // jurídica antes da publicação final.
  termsPage: {
    meta: {
      title: "Termos de Uso",
      description:
        "Termos e condições de uso do site da Singular Agency, marca operada pela Titan Soluções Tecnológicas LTDA.",
    },
    eyebrow: "Condições",
    headline: "Termos de Uso",
    updatedAt: "Última atualização: 6 de outubro de 2026",
    intro:
      "Estes Termos de Uso regulam o acesso e a utilização do site da Singular Agency, marca operada pela Titan Soluções Tecnológicas LTDA (CNPJ 18.495.048/0001-83). Ao navegar neste site, você concorda com os termos abaixo.",
    sections: [
      {
        heading: "1. Sobre este site",
        paragraphs: [
          "Este é um site institucional e comercial da Singular Agency, com o objetivo de apresentar nossos serviços de performance em mídia paga, branding e tecnologia, e receber solicitações de contato e diagnóstico gratuito. O site não oferece login, área logada ou qualquer sistema transacional — a única ação de conversão é o envio do formulário de contato.",
        ],
      },
      {
        heading: "2. Propriedade intelectual",
        paragraphs: [
          "A marca Singular Agency, seu logotipo, identidade visual, textos, imagens e demais conteúdos deste site são de propriedade da Titan Soluções Tecnológicas LTDA ou licenciados a ela, e protegidos pela legislação de propriedade intelectual. É vedada a reprodução, distribuição ou uso comercial desse conteúdo sem autorização prévia por escrito.",
        ],
      },
      {
        heading: "3. Uso permitido",
        paragraphs: [
          "Você pode navegar e consultar o conteúdo deste site livremente para fins pessoais e não comerciais. É vedado usar o site para fins ilícitos, tentar acessar áreas restritas sem autorização, ou realizar qualquer ação que comprometa a segurança ou o funcionamento do site.",
        ],
      },
      {
        heading: "4. Formulário de contato e diagnóstico gratuito",
        paragraphs: [
          "O envio do formulário de contato não gera, por si só, nenhuma obrigação contratual entre você e a Titan Soluções Tecnológicas LTDA. Propostas comerciais, prazos e condições de diagnóstico são sempre comunicados individualmente após o contato inicial.",
        ],
      },
      {
        heading: "5. Links para sites de terceiros",
        paragraphs: [
          "Este site pode conter links para sites de terceiros (redes sociais, parceiros, ferramentas). Não nos responsabilizamos pelo conteúdo, política de privacidade ou práticas desses sites externos.",
        ],
      },
      {
        heading: "6. Limitação de responsabilidade",
        paragraphs: [
          "Fazemos o possível para manter as informações deste site precisas e atualizadas, mas não garantimos ausência total de erros ou interrupções. Resultados de campanhas e cases exibidos refletem dados reais de clientes atendidos, mas resultados futuros podem variar conforme o contexto de cada operação.",
        ],
      },
      {
        heading: "7. Legislação aplicável e foro",
        paragraphs: [
          "Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da comarca de Jundiaí/SP para dirimir quaisquer controvérsias decorrentes destes termos, com renúncia a qualquer outro, por mais privilegiado que seja.",
        ],
      },
      {
        heading: "8. Alterações destes termos",
        paragraphs: [
          "Podemos atualizar estes Termos de Uso periodicamente. A data da última atualização está sempre indicada no topo desta página. O uso continuado do site após alterações implica concordância com os novos termos.",
        ],
      },
      {
        heading: "9. Contato",
        paragraphs: [
          "Dúvidas sobre estes termos podem ser enviadas para contato@singularagency.com.br.",
        ],
      },
    ],
  },

  footer: {
    ctaHeadline: "Vamos conversar sobre a sua próxima curva de crescimento?",
    cta: "Falar com a gente",
    about:
      "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding.",
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
          { label: "Quem somos", href: "/sobre" },
          { label: "Contato", href: "/contato" },
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
    legalEntityLine:
      "Singular Agency é uma marca operada por Titan Soluções Tecnológicas LTDA — CNPJ 18.495.048/0001-83.",
  },
} as const;

export type Copy = typeof copy;
