# Singular Agency — Style Reference
> Autoridade quieta com um pulso laranja. Uma agência de performance em Google e Meta que se comporta como uma casa de branding premium: tipografia geométrica tracked, blocos de cor sólidos, muito ar entre os elementos, e um único acento cromático que nunca é gratuito.

**Theme:** hybrid (base clara dominante + blocos de contraste em Deep Ink)

Singular Agency opera como uma "editora de resultados": o corpo do site vive em Warm Ivory (#F5F1E8) com tipografia em Soft Black, mas a cada 2–3 seções o layout mergulha em um bloco full-bleed de Deep Ink (#17202A) para criar ritmo cinematográfico e dar peso às afirmações mais fortes ("IDEIAS QUE FAZEM DIFERENTE.", "BOAS MARCAS NÃO SÃO COMUNS."). O Singular Orange (#F05A28) é o único elemento cromático saturado do sistema — reservado para o logotipo, CTAs, o traço "—" que assina cada bloco de texto, e destaques pontuais em headlines (uma palavra colorida dentro de um título majoritariamente branco/preto). A tipografia é geométrica, em caixa alta tracked para labels e eyebrows, e em peso forte para headlines — o mesmo DNA do wordmark "SINGULAR". Cards têm raio pequeno (12px, quase reto — projeta seriedade, não playground), botões são pill completo (9999px) — o único elemento redondo do sistema, o que faz o CTA se destacar por contraste de forma. Não há gradientes decorativos, não há sombras pesadas; a hierarquia vem de contraste de superfície (ivory → deep ink → laranja), peso tipográfico e o traço "—" que Singular usa como assinatura visual em quase toda peça de marca.

## DNA de Referência (para a IA entender o *porquê*, não só o *o quê*)

Este site nasce do cruzamento deliberado de três referências, cada uma emprestando uma fatia específica do sistema — nunca copiadas literalmente, sempre reinterpretadas com a paleta e o logotipo da Singular:

- **Wpromote (~55% da influência de design)** — a espinha dorsal do site. Layout moderno, dinâmico e ousado, mas **nunca hostil ao usuário**: grids de serviço com ícone-seta diagonal, blocos de cor sólida full-bleed intercalados com branco, contadores de resultado grandes e confiantes ("50%", "150M+"), barra de logos de clientes em marquee, headlines curtas e diretas com uma palavra de impacto isolada em nova linha. A lição central do Wpromote que a Singular herda: **impressionar sem cansar** — motion sutil, nunca genérico, sempre com propósito de leitura.
- **R/GA (~30% da influência de design)** — a camada de restraint premium. Menos elementos por tela, tipografia enorme e silenciosa carregando o peso da mensagem sozinha, cor quase monocromática, generoso espaço negativo, frases curtas que soam como manifesto ("We design intelligent brand systems that help businesses get ahead"). A Singular usa essa influência para evitar que o site vire "agência de performance barata" — cada seção tem menos elementos do que o instinto mandaria, e o silêncio visual é o que comunica preço alto.
- **WebFX (0% de influência visual, 100% de influência estrutural/SEO)** — **não copiar nada do visual** (é intencionalmente o mais "datado" dos três). O que se herda é a disciplina invisível: prova social imediata acima da dobra, número de telefone e CTA sempre visíveis no header, hierarquia de heading impecável para SEO, blog/hub de recursos robusto, páginas de serviço profundas e interligadas, dados estruturados (schema) em todo tipo de conteúdo, métricas de resultado por case, FAQ estruturado, e uma arquitetura de conteúdo pensada para rankear organicamente antes mesmo de pensar em estética.

O resultado-alvo: **um site que parece ter sido feito por um designer sênior de agência premium (Wpromote/R/GA) e implementado por um engenheiro obcecado por Core Web Vitals e SEO técnico (WebFX)** — nunca um site institucional genérico, nunca um "AI slop" de tema dark com gradiente roxo.

## Logo — Assets Oficiais

**Regra crítica: o logo nunca é recriado em CSS/HTML/SVG.** Sempre usar os arquivos de imagem oficiais abaixo, presentes na raiz do projeto — nunca redesenhar o wordmark com `<span>`s coloridos, nunca tentar reproduzir o corte diagonal do "S" em CSS puro. Esses três arquivos (prefixo `oficial -`) são os únicos assets de logo aprovados para uso em qualquer peça, site ou material:

| Arquivo | Conteúdo | Uso |
|---|---|---|
| `oficial - somente logo.png` | Símbolo isolado — o "S" laranja (`#F05A28`) de corte diagonal, sem texto | Favicon, ícone de app, marca d'água, uso em espaços pequenos/quadrados (mobile nav colapsada, redes sociais), elemento decorativo solto. Por ser 100% laranja sólido sem tinta escura, funciona sobre qualquer superfície do sistema (Ivory, Deep Ink, Graphite Matte) sem tratamento adicional |
| `oficial - logo so escrita lateral.png` | Wordmark horizontal — "SiNGULAR" + "AGENCY" tracked ao lado | Lockup padrão do header (logo à esquerda) e de qualquer contexto horizontal/wide |
| `oficial - logo so escrita.png` | Wordmark empilhado — "SiNGULAR" com "AGENCY" centralizado abaixo | Contextos verticais/quadrados: splash mobile, capa de documento, assinatura de e-mail, centro de tela em loading |

**Sobre fundo escuro (Deep Ink/Graphite Matte):** os dois arquivos de wordmark têm tinta em Soft Black (`#181818`) sobre fundo claro/transparente — não existe uma variante branca exportada. Para usar sobre superfície escura (footer, header em estado transparente da Variante B), aplicar `filter: brightness(0) invert(1)` na tag `<img>` para inverter para branco puro. Não usar `mix-blend-mode` nem recriar o texto por CSS como alternativa.

`cores e identidade visual.png` e `Logos exemplo.png` **não são assets** — são moodboards/referência de identidade visual para a IA entender contexto de marca (paleta aplicada, tom de peça, tratamento fotográfico). Nunca cropar, recortar ou usar pedaços desses dois arquivos como imagem final em qualquer peça ou site.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Singular Orange | `#F05A28` | `--color-singular-orange` | Cor primária — logotipo, CTAs preenchidos, o traço "—" de assinatura, destaques em headline (uma palavra colorida dentro de um título), estado de foco/hover em links. É a única cor saturada do sistema — usar com raridade deliberada |
| Deep Ink | `#17202A` | `--color-deep-ink` | Superfície de contraste — header quando com scroll, seções full-bleed alternadas, footer, cards escuros, fundo de blocos de citação/estatística de alto impacto |
| Warm Ivory | `#F5F1E8` | `--color-warm-ivory` | Background principal do site — o "papel" sobre o qual o conteúdo claro vive. Nunca usar branco puro (#FFFFFF) como fundo de página — Warm Ivory é o que dá a textura premium/editorial |
| Soft Black | `#181818` | `--color-soft-black` | Tipografia principal sobre fundos claros — headlines, body text, nav em estado claro. Preferido a preto puro para reduzir dureza óptica |
| Stone Gray | `#8C8A84` | `--color-stone-gray` | Texto secundário, legendas, metadados, labels de formulário, texto de suporte sob headlines — em ambos os fundos claro e escuro |
| Warm Gray | `#DED9CF` | `--color-warm-gray` | Bordas, divisores, background de cards claros, hairlines entre seções — a camada de estrutura silenciosa que nunca compete com o conteúdo |
| Pure White | `#FFFFFF` | `--color-pure-white` | Texto de máximo contraste sobre Deep Ink — headlines e labels dentro de blocos escuros. Nunca usado como fundo de página |
| Ink Muted | `rgba(23, 32, 42, 0.65)` | `--color-ink-muted` | Overlay de imagem para legibilidade de texto sobre fotografia (hero, cases), scrim de vídeo, texto secundário sobre Deep Ink |

## Tokens — Typography

### General Sans — Face geométrica única do sistema, ecoando o desenho do wordmark "SINGULAR" (hastes retas, curvas quase circulares no "S" e no "O"). Peso 600–700 para headlines e eyebrows tracked; peso 400–500 para corpo de texto e UI. Sem serifa, sem itálico decorativo — a personalidade vem inteiramente de escala e tracking, não de ornamento. · `--font-display`
- **Substitute:** Aeonik, Clash Grotesk, ou Inter (fallback neutro de sistema) — todas geométricas de haste reta compatíveis com o desenho do logotipo
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12, 13, 14, 16, 18, 20, 24, 32, 40, 56, 72, 96px
- **Line height:** 1.0 (display), 1.1 (heading), 1.3 (subheading), 1.55 (body)
- **Letter spacing:** -0.02em em display (56–96px), 0em em body, +0.08em a +0.14em em uppercase labels/eyebrows (o mesmo tracking largo visto em "ESTRATÉGIA · CRIATIVIDADE · RESULTADOS" e "PESSOAS · IDEIAS · MARCAS · RESULTADOS" nas peças de marca)
- **Role:** Face única do sistema. Carrega toda a hierarquia — display gigante para hero e manifestos de seção, peso 600 para headings de card, peso 400 para corpo. A caixa alta tracked em labels curtos é a assinatura tipográfica mais reconhecível da marca.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Token |
|------|------|-------------|----------------|--------|-------|
| eyebrow | 13px | 1.4 | 0.12em (uppercase) | 500 | `--text-eyebrow` |
| caption | 14px | 1.5 | 0em | 400 | `--text-caption` |
| body | 16px | 1.55 | 0em | 400 | `--text-body` |
| body-lg | 18px | 1.5 | 0em | 400 | `--text-body-lg` |
| subheading | 24px | 1.3 | -0.01em | 600 | `--text-subheading` |
| heading | 40px | 1.15 | -0.015em | 600 | `--text-heading` |
| heading-lg | 56px | 1.05 | -0.02em | 700 | `--text-heading-lg` |
| display | 96px | 1.0 | -0.02em | 700 | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious, mas menos extrema que R/GA puro — o site precisa "respirar" sem parecer vazio para um público de decisores de marketing que quer ver prova e dado rápido (herança Wpromote/WebFX).

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| buttons | 9999px |
| tags/badges | 9999px |
| cards | 12px |
| inputs | 8px |
| images/media | 12px |

### Layout

- **Page max-width:** 1320px
- **Section gap:** 96–120px (blocos full-bleed podem usar 120–160px de padding vertical interno)
- **Card padding:** 32–40px
- **Element gap:** 16–24px

## Components

### Pill CTA (Primary)
**Role:** Ação principal — "Falar com a gente", "Solicitar diagnóstico gratuito"

Fundo `#F05A28`, texto `#FFFFFF`, border-radius 9999px, padding 16px vertical / 32px horizontal, fonte 14px General Sans peso 600, uppercase, tracking 0.04em. Sem borda, sem sombra. Hover: leve escurecimento (~8%) do fundo, nunca gradiente. É o único botão preenchido do sistema — usar no máximo 1–2 por viewport para preservar a raridade da cor.

### Ghost Pill CTA (Secondary)
**Role:** Ação secundária, links dentro de blocos escuros

Transparente, borda 1.5px `#F05A28` (sobre fundo claro) ou `#FFFFFF` (sobre Deep Ink), texto na cor da borda, mesmo padding e radius do CTA primário. Hover: preenche com a cor da borda e o texto inverte para branco/preto.

### Arrow Link Button
**Role:** Trigger "ir para" em cards de serviço e listagens — inspirado no padrão de seta diagonal do Wpromote

32×32px, border-radius 8px, fundo `rgba(23,32,42,0.06)` sobre claro ou `rgba(255,255,255,0.1)` sobre escuro, ícone seta ↗ 16px em Soft Black ou Pure White. Posicionado no canto superior direito de Feature/Service Cards. Hover: fundo vira Singular Orange sólido, ícone vira branco.

### Signature Dash
**Role:** Elemento de assinatura de marca — usado abaixo de eyebrows e antes de CTAs

Um traço horizontal de 32px de largura × 2px de altura em `#F05A28`. Aparece consistentemente nas peças de marca (abaixo de "MARCAS MAIS RELEVANTES...", antes de listas de serviço). Usar sempre no mesmo padding (12px acima do elemento seguinte) — é o "assinatura" que substitui bullet points ou ícones decorativos genéricos.

### Service / Feature Card
**Role:** Grade de serviços (Google Ads, Meta Ads, SEO, Social, Branding, Automação)

Fundo `#FFFFFF` ou `#F5F1E8` levemente diferenciado do canvas, border 1px `#DED9CF`, border-radius 12px, padding 32–40px. Heading 24px peso 600 Soft Black, body 16px peso 400 Stone Gray. Arrow Link Button no canto superior direito. Sem sombra — a borda de 1px é toda a elevação que o card recebe.

### Dark Statement Block
**Role:** Seção full-bleed de alto impacto — manifesto de marca, transição entre seções

Fundo `#17202A` full-bleed, padding vertical 120–160px, conteúdo centralizado em coluna de até 720px. Headline 56–96px peso 700 `#FFFFFF` com uma palavra em `#F05A28` para ênfase (padrão "BOAS MARCAS NÃO SÃO COMUNS." com "NÃO SÃO COMUNS" em laranja). Eyebrow tracked acima, Signature Dash entre eyebrow e headline.

### Stat Counter
**Role:** Prova de resultado — números grandes de case studies e home

Número em 56–72px peso 700 `#F05A28` (sobre fundo escuro) ou `#181818` (sobre fundo claro), line-height 1.0. Label abaixo em 13px uppercase tracked `#8C8A84`. Layout em grade de 3–4 colunas, sem cards ao redor — os números vivem soltos no espaço, como no Wpromote.

### Logo Marquee / Trust Bar
**Role:** Prova social de clientes — logos em scroll contínuo ou grid estático

Faixa horizontal full-width, fundo `#F5F1E8` ou `#17202A`, logos de clientes em monocromático (grayscale/branco), altura uniforme ~32px, gap 64px entre logos. Eyebrow acima: "MARCAS QUE CONFIAM NA SINGULAR" tracked 12px.

### Testimonial Quote Block
**Role:** Depoimento de cliente com atribuição

Aspas ou Signature Dash como abertura visual, quote em 24–32px peso 500 itálico-free (a face não tem itálico decorativo — usar cor `#181818` ou `#FFFFFF` conforme fundo), atribuição em 14px `#8C8A84` (Nome, Cargo, Empresa). Sem card ao redor — vive solto em bloco de até 640px de largura.

### Case Study Card
**Role:** Grid de portfólio/resultados

Imagem 16:9 com overlay `rgba(23,32,42,0.15)`, border-radius 12px no topo, área de texto abaixo com fundo `#FFFFFF`. Eyebrow do setor (ex: "E-COMMERCE") em laranja tracked, headline do resultado 20px peso 600, 2–3 stat chips inline abaixo. Hover: leve zoom (1.03x) na imagem apenas, sem mover o card.

### Sticky Navigation Header
**Role:** Header do site

**⚠️ Regra crítica — a cor do texto do header SEMPRE segue a superfície real atrás dele, nunca um padrão fixo.** O bug mais comum ao implementar este sistema é copiar "texto branco no header transparente" sem checar se o hero por trás é claro ou escuro. Existem duas variantes — escolher a que bate com o hero daquela página específica:

- **Variante A — Header sobre Hero Claro (padrão da Home e da maioria das páginas internas, já que o hero vive em Warm Ivory):** o header nasce **já com fundo sólido leve** (`#F5F1E8` a ~92% de opacidade + blur) e texto em `#181818` desde o primeiro frame — **nunca transparente-com-texto-branco sobre um hero claro**. Não existe estado "invisível" nesta variante; a única transição no scroll é a borda inferior 1px `#DED9CF` que aparece e o blur que intensifica levemente.
- **Variante B — Header sobre Hero de Mídia (hero com foto/vídeo full-bleed e overlay escuro — ver Imagery/Higgsfield abaixo):** aí sim o header nasce transparente com texto `#FFFFFF`, e transiciona para a Variante A (fundo sólido, texto `#181818`) assim que `scrollY > 24px`. Essa variante só é válida quando o desenvolvedor confirma visualmente que o primeiro viewport é escuro o suficiente para o branco ter contraste ≥ 4.5:1.

Altura 80px, logo à esquerda, nav central com 5–6 itens em 14px peso 500, Pill CTA à direita sempre visível em ambas variantes. Em telas <1024px, colapsa para hamburger + CTA visível (nunca esconder o CTA). **Antes de shippar qualquer header, renderizar o primeiro viewport real e checar contraste — não assumir.**

### Mega Footer
**Role:** Rodapé — arquitetura de link profunda para SEO (herança WebFX) com visual premium (herança R/GA)

Fundo `#17202A`, padding vertical 96px. Bloco de CTA final no topo do footer (headline + Pill CTA). Abaixo, 4–5 colunas de links (Serviços, Empresa, Recursos/Blog, Cases, Contato) em 14px `#DED9CF`, headers de coluna em 12px uppercase tracked `#8C8A84`. Linha final com copyright, redes sociais (ícones 20px outline brancos) e links legais.

### Contact / Lead Form
**Role:** Formulário de contato — única "ação de conversão" do site, sem login/sistema

Campos em Hairline Input (fundo `#FFFFFF`, borda 1px `#DED9CF`, radius 8px, padding 14px 16px, foco: borda `#F05A28` 1.5px), labels 13px `#8C8A84` acima do campo. Campos: Nome, E-mail empresarial, WhatsApp/Telefone, Empresa, Verba mensal estimada (select), Mensagem. Botão de envio = Pill CTA primário full-width em mobile.

### FAQ Accordion
**Role:** Bloco de perguntas frequentes — para SEO (featured snippets) e objeções de venda

Cada item: header em 18px peso 600 `#181818` com ícone "+" que rotaciona para "×" em `#F05A28`, borda inferior 1px `#DED9CF` entre itens, corpo expandido em 16px `#8C8A84` com padding-top 12px. Marcar com schema `FAQPage` (ver seção SEO).

### Orbit Dot Pair
**Role:** Elemento decorativo de assinatura — a reinterpretação Singular do ícone de "dois círculos" que o Wpromote usa para marcar cada bloco de mensagem (full-funnel: consciência → conversão)

Dois círculos sólidos lado a lado, tangentes ou levemente sobrepostos, 20–48px de diâmetro cada, sempre em uma dupla de cor do sistema (`#F05A28` + `#17202A` sobre claro, ou `#F05A28` + `rgba(255,255,255,0.16)` sobre escuro — nunca duas cores saturadas juntas). Usado como marcador de eyebrow em blocos de manifesto, no lugar de um ícone genérico. É um elemento **puramente CSS** (dois `<div>` com `border-radius: 9999px`, sem SVG, sem imagem) — zero custo de peso de página.

### Blueprint Grid Overlay
**Role:** Textura de fundo sutil para heroes e statement blocks — dá densidade técnica/premium sem competir com o conteúdo

Grade de linhas finas (1px, `rgba(255,255,255,0.04)` sobre Deep Ink ou `rgba(23,32,42,0.04)` sobre Ivory) espaçadas a cada 64–80px, cobrindo o fundo de heroes e Dark Statement Blocks via `background-image: linear-gradient(...)` repetido — não é uma imagem, é CSS puro. Opcionalmente combinada com 1–2 círculos ocos (`border: 1px solid`, sem fill) flutuando nos cantos, sugerindo instrumentação de dado sem ilustração literal.

### Radial Glow
**Role:** Único efeito de "brilho" permitido no sistema — substitui qualquer gradiente decorativo

Um `radial-gradient` de `rgba(240,90,40,0.18)` para transparente, posicionado atrás de um elemento-chave (o número de um Stat Counter, o CTA do hero, a imagem de um Case Card no hover), nunca como fundo de seção inteira. Simula luz saindo do laranja sem nunca pintar uma superfície grande de gradiente — mantém a regra "sem gradiente decorativo" ao mesmo tempo em que dá profundidade luminosa.

### Marquee Scroller
**Role:** Faixa de rolagem contínua — usada na Logo Marquee e opcionalmente em uma faixa de palavras-chave de serviço

Track duplicado (`width: max-content`, conteúdo repetido 2x) animando via `transform: translateX()` em `@keyframes`, 24–32s linear infinite, `mask-image` com fade nas bordas esquerda/direita. Pausa no hover (`animation-play-state: paused`) e respeita `prefers-reduced-motion` (para a animação, mostra estático).

## Motion & Interaction System

O erro mais comum ao implementar este sistema é tratá-lo como "flat design estático" por causa da ausência de sombra e gradiente — **zero-shadow não significa zero-movimento**. O Wpromote (a referência de 55%) usa motion o tempo todo: hover em cada card, contadores que sobem, marquee contínuo, ícones que reagem. A Singular herda isso integralmente. Toda seção do site precisa de **pelo menos um** destes efeitos — nenhuma seção deve ser um bloco de cor estático sem nenhuma reação a scroll ou hover.

| Efeito | Onde | Especificação |
|--------|------|----------------|
| Scroll Reveal | Todo bloco de conteúdo (headings, cards, stats) | `opacity: 0` + `translateY(18px)` → `opacity: 1` + `translateY(0)` via `IntersectionObserver` (threshold 0.15), duração 500–650ms, `ease-out`, disparado uma vez. Cards de um mesmo grid entram com stagger de 60–90ms entre si |
| Counter Count-up | Stat Counter | Anima de 0 até o valor final em ~1200–1500ms com easing `cubic-bezier` de desaceleração, disparado ao entrar no viewport (threshold 0.4) |
| Hover Lift | Service Card, Case Card | `translateY(-4px)` + a borda muda de `#DED9CF` para `#F05A28` em 180–220ms `ease` — nunca sombra, o "lift" é só a borda e o deslocamento |
| Hover Zoom | Imagem dentro de Case Card | `scale(1.04)` só na imagem (`overflow: hidden` no container), 350–450ms `ease-out` — o card em volta não se move |
| Arrow Nudge | Arrow Link Button | A seta desloca `translate(2px, -2px)` no hover, 150ms — sugere "saindo" na direção da seta |
| Magnetic CTA | Pill CTA primário no hero | Leve atração do botão em direção ao cursor num raio de ~40px (`transform: translate()` proporcional à distância do mouse), reseta com spring ao sair — efeito sutil, não deve deslocar mais que 6–8px |
| Parallax Leve | Imagem/vídeo de hero, Blueprint Grid Overlay | Deslocamento de até 40px em `translateY` proporcional ao scroll (via `transform`, nunca via JS que force reflow) — profundidade sem exagero |
| Marquee Contínuo | Logo Marquee | Ver componente Marquee Scroller acima |
| Sticky Header Transition | Header | `background-color`, `backdrop-filter` e `border-color` em 200–220ms `ease` no scroll (ver regra crítica no componente Header) |
| Cursor-aware Radial Glow | Hero, CTA final do footer | O Radial Glow acompanha a posição do cursor dentro do bloco (`mousemove` com throttle), criando sensação de luz viva — desliga em touch/mobile |

**Regras de motion:**
- Toda animação respeita `prefers-reduced-motion: reduce` — nesse caso, os elementos aparecem no estado final imediatamente, sem transição
- Nenhuma animação usa JavaScript para animar propriedades que forçam layout (`width`, `height`, `top`, `left`) — sempre `transform` e `opacity`
- Duração mínima 150ms (nada "pisca"), máxima 650ms (nada "arrasta") — a faixa inteira do sistema vive entre esses dois limites
- Easing padrão: `ease-out` para elementos entrando, `ease` para hovers, nunca `linear` exceto no Marquee

## Ritmo de Superfície — variedade de fundo escuro

Um site "premium e moderno" não alterna só entre um claro e **um único** escuro — isso cansa visualmente em páginas longas. A Singular usa **duas superfícies escuras distintas**, alternadas com propósito:

| Superfície | Cor | Quando usar |
|---|---|---|
| Deep Ink | `#17202A` (com leve matiz azulado) | Header escuro, footer, blocos de manifesto ligados a marca/estratégia — a cor "oficial" de contraste da marca |
| Graphite Matte | `#141414` | Seções de prova/dado mais técnicas (cases, stats, depoimentos) — um preto fosco quase neutro, sem matiz, que funciona como "sala escura de projeção" para números e fotografia em P&B. Nunca usar as duas cores escuras lado a lado na mesma seção — cada bloco escuro é inteiramente Deep Ink OU inteiramente Graphite Matte |

Isso soma-se ao Warm Ivory e ao branco de card, dando ao sistema **quatro tons de superfície** (Ivory, branco, Deep Ink, Graphite Matte) em vez de dois — o suficiente para variar sem introduzir uma nova cor cromática.

## Do's and Don'ts

### Do
- Reservar `#F05A28` para no máximo 1–2 elementos por viewport — CTA principal + 1 destaque de headline. A raridade é o que dá autoridade à cor
- Usar Warm Ivory (`#F5F1E8`) como fundo padrão de página — nunca branco puro (`#FFFFFF`) para grandes áreas de canvas
- Alternar seções claras e blocos escuros full-bleed a cada 1–2 seções (mais frequente que a versão anterior deste documento) para criar ritmo cinematográfico — variando entre Deep Ink e Graphite Matte para não repetir sempre o mesmo escuro
- Usar o Signature Dash (traço laranja 32×2px) e o Orbit Dot Pair como elementos de assinatura consistentes — substituem bullets, ícones decorativos e outras "muletas" visuais genéricas
- Manter todo texto uppercase tracked (eyebrows, labels, nav) com peso 500 e tracking 0.08–0.14em — é a assinatura tipográfica mais reconhecível da marca
- Manter o CTA principal sempre visível no header, mesmo em scroll — herança direta de conversão do WebFX
- Usar apenas dois raios de borda: 12px (cards/imagens) e 9999px (botões/tags) — o contraste entre "quase reto" e "pill total" é o vocabulário de forma completo
- Dar a toda seção pelo menos um elemento do Motion & Interaction System (reveal, hover, marquee, parallax) — uma seção 100% estática quebra o ritmo do resto do site
- Dar a toda seção pelo menos um elemento visual além de texto — Orbit Dot Pair, Blueprint Grid Overlay, uma foto/vídeo Higgsfield, ou um Stat Counter grande. Nenhuma seção deve ser "eyebrow + headline + parágrafo" sobre um retângulo de cor sólida sem mais nada
- **Antes de finalizar qualquer header ou bloco com texto sobre fundo variável, renderizar e checar contraste no estado real da página** (nunca assumir "transparente = vai ter algo escuro atrás") — ver regra crítica no componente Header

### Don't
- Não introduzir uma segunda cor de acento saturada — laranja é o único sinal cromático do sistema
- Não usar sombras (`box-shadow`) para elevação — a hierarquia vem de borda de 1px em `#DED9CF` e diferença de superfície (ivory/branco/deep ink/graphite), nunca de blur
- Não usar gradientes decorativos em botões, fundos ou textos — o único "brilho" permitido é o Radial Glow contido a um elemento, nunca um gradiente cobrindo uma seção inteira
- Não deixar nenhuma seção parecer "genérica de agência" (ícone + título + parágrafo em grid 3 colunas sem nenhuma assinatura visual) — todo bloco precisa do Signature Dash, do Orbit Dot Pair, do arrow button, de imagem/vídeo, ou de um stat grande para ter DNA próprio
- Não construir uma seção inteira como retângulo de cor sólida sem forma, imagem, vídeo ou movimento — é exatamente esse erro que o Wpromote nunca comete e que faz um site parecer "template", não "agência premium"
- Não misturar mais de uma família tipográfica — General Sans cobre display, body e UI sozinha
- Não usar border-radius acima de 12px em cards nem abaixo de 9999px em botões — não existe "meio termo" arredondado no sistema
- Não sacrificar contraste/legibilidade por estética — todo texto sobre imagem precisa do Ink Muted overlay; todo texto sobre Deep Ink/Graphite Matte usa Pure White ou Warm Ivory, nunca Stone Gray para corpo longo; **nunca texto claro sobre fundo claro (ou escuro sobre escuro) por ter copiado um estado de hover/scroll sem checar o estado inicial real da página**
- Não adicionar login, dashboard, ou qualquer superfície de "sistema" — este é um site institucional/comercial com formulário de contato como única conversão

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Warm Ivory | `#F5F1E8` | Canvas padrão — todo o conteúdo claro do site vive aqui |
| 1 | Card Claro | `#FFFFFF` | Cards e formulários sobre o canvas ivory, diferenciados por borda 1px, não por sombra |
| 2 | Deep Ink | `#17202A` | Blocos de contraste full-bleed ligados a marca/estratégia — header escuro, footer, manifestos |
| 3 | Graphite Matte | `#141414` | Blocos de contraste ligados a prova/dado — cases, stats, depoimentos, fundo de fotografia P&B |
| 4 | Slate sobre Escuro | `rgba(255,255,255,0.06)` | Cards e inputs dentro de seções Deep Ink ou Graphite Matte |

## Elevation

Zero sombras em todo o sistema. A profundidade é comunicada por (1) mudança de superfície — ivory para deep ink, branco para ivory —, (2) bordas hairline de 1px em `#DED9CF` sobre claro ou `rgba(255,255,255,0.12)` sobre escuro, e (3) peso tipográfico. Isso é herdado tanto do R/GA (zero-shadow, hierarquia por escala) quanto do rigor de performance do WebFX (menos camadas de blur = menos custo de render = Core Web Vitals melhores).

## Imagery

Fotografia em preto e branco de alto contraste com tratamento arquitetônico — formas geométricas, luz dura, sombras duras (o mesmo tratamento visto nas peças de marca: pessoa de casaco em ambiente de concreto, luz entrando em diagonal). Quando cor aparece em imagem, é sempre um recorte controlado — um objeto ou superfície em laranja dentro de uma cena monocromática (ex: o papel timbrado laranja sobre mesa preta), nunca fotografia lifestyle colorida genérica de banco de imagens. Ícones são sempre outline fino, nunca preenchidos, nunca ilustração 3D/isométrica. Não usar ilustração fofa, emoji, ou mockup 3D genérico de "growth hacking" — isso quebraria o posicionamento premium. Gráficos de dado (quando necessário) seguem a paleta: linha/barra em laranja sobre fundo ivory ou deep ink, sem gradiente, sem sombra 3D.

**Regra de presença mínima:** um site "AI slop" se denuncia por seções inteiras de cor sólida sem nenhuma mídia real. Neste sistema, cada tipo de seção tem uma exigência mínima de imagem/vídeo — nunca opcional:

| Seção | Mídia obrigatória |
|---|---|
| Hero | Foto ou vídeo curto em loop (ver Variante B do Header) OU, no mínimo, o Blueprint Grid Overlay + Radial Glow + uma composição geométrica com Orbit Dot Pair — nunca só texto sobre cor sólida |
| Dark Statement Block | Pelo menos o Blueprint Grid Overlay; idealmente uma imagem de textura/arquitetura em baixa opacidade (~15–20%) atrás do texto |
| Case Study Card | Foto real do case (produto, tela de resultado estilizada, ou still do case) — nunca um retângulo de cor sólida no lugar da imagem |
| Trust Bar / Marquee | Logos reais dos clientes |
| Testimonial | Foto do cliente (circular, pequena, ~56px) ao lado da atribuição sempre que disponível |

### Produção de assets com Higgsfield

**Regra crítica: nenhuma peça (site, mockup, preview, material de marca) sai com imagem, vídeo, ícone ou elemento gráfico "placeholder".** Nada de retângulo de cor sólida, gradiente genérico, ou composição improvisada em CSS/SVG (polígonos, formas geométricas soltas, etc.) fazendo as vezes de fotografia ou arte real — isso é exatamente o "AI slop" que este sistema existe pra evitar. Todo asset fotográfico/de vídeo que não seja logo de cliente real, e todo ícone ou elemento gráfico decorativo que não seja um dos Components já especificados neste documento (Signature Dash, Orbit Dot Pair, Blueprint Grid Overlay, Radial Glow — esses são CSS puro por design, ver seção Components), deve ser gerado via **Higgsfield**, seguindo este brief de estilo para manter consistência com a identidade:

- **Prompt base de tratamento (fotografia/vídeo):** preto e branco de alto contraste, iluminação dura e direcional, ambientes arquitetônicos/geométricos (concreto, vidro, linhas retas), sem pessoas sorrindo posadas de banco de imagens — preferir movimento, ângulo dinâmico, ou momento candid
- **Recorte de cor:** quando o brief pedir um toque de cor, aplicar apenas em UM elemento da cena (uma superfície, um objeto, uma luz) em `#F05A28` — nunca colorir a cena inteira
- **Formatos a gerar:** (1) hero — vídeo loop 6–10s ou still 16:9 em alta resolução; (2) case cards — still 16:9 por case; (3) texturas de fundo para Dark Statement Blocks — still de baixo contraste/baixa saturação preparado para opacidade reduzida; (4) micro-clipes para hover de Case Card (opcional, 2–3s loop); (5) ícones/glifos de serviço quando o grid de Service Cards pedir um ícone além do Arrow Link Button — gerar como imagem outline fina, nunca preenchida, nunca 3D/isométrica (ver regra em Imagery); (6) qualquer ilustração, textura ou elemento gráfico de apoio que uma seção precise e que não seja um Component já tokenizado
- **Pós-processamento obrigatório em todo asset fotográfico:** aplicar o overlay `Ink Muted` (`rgba(23,32,42,0.65)` graduado ou sólido conforme a área de texto) para garantir contraste AA do texto por cima — nunca subir um asset do Higgsfield direto sem checar legibilidade do texto sobreposto
- **Otimização:** exportar do Higgsfield em resolução máxima necessária, depois comprimir para AVIF/WebP via `next/image` — vídeos de hero como `.webm` com poster estático em `.avif`, `autoplay muted loop playsinline`, com fallback de imagem estática se `prefers-reduced-motion: reduce`

**Ordem de tentativa do MCP Higgsfield** (ver também regra equivalente em `CLAUDE.md`):
1. Ferramentas MCP do Higgsfield conectadas nesta sessão do Claude Code (`mcp__claude_ai_Higgsfield__generate_image`, `generate_video`, etc.) — caminho padrão, tentar primeiro
2. Se indisponível/erro: verificar `/mcp` e reconectar
3. Como último recurso, API REST do Higgsfield com API key (`cloud.higgsfield.ai/api-keys`)
4. Se nenhuma das integrações funcionar, o agente não deve travar nem inventar um substituto — deve gerar e entregar ao usuário o prompt de imagem/vídeo pronto (já seguindo o brief de estilo acima) para ele gerar manualmente no Higgsfield. **Nunca preencher o vazio com um placeholder CSS/SVG** — uma seção sem o asset real fica marcada como pendente, não "resolvida" com uma composição improvisada.

## Layout

Canvas full-bleed alternando Warm Ivory, Deep Ink e Graphite Matte, conteúdo centralizado em coluna de até 1320px. O header segue a regra crítica de contraste (Variante A ou B — nunca assumido, sempre checado contra o hero real daquela página) e nunca esconde o CTA. O hero ocupa ~85vh e carrega mídia real (foto/vídeo Higgsfield ou, no mínimo, Blueprint Grid Overlay + Radial Glow + Orbit Dot Pair): eyebrow tracked → headline display (72–96px) com uma palavra em laranja → subtexto 18px → dois CTAs (primário preenchido + ghost) lado a lado. Logo abaixo do hero, a Logo Marquee entra imediatamente como prova social (herança WebFX: confiança antes de qualquer explicação). Seções de serviço usam grid assimétrico 2 ou 3 colunas com Feature Cards, cada uma com hover lift e arrow nudge; blocos de manifesto (Dark Statement Block, alternando Deep Ink e Graphite Matte) intercalam a cada 1–2 seções para criar respiro, impacto e a variedade tonal descrita em Ritmo de Superfície. Stats vivem soltos em grid de 3–4 colunas com count-up animado ao entrar no viewport. Case Cards sempre carregam imagem real com hover zoom. O footer é um Mega Footer com CTA final embutido no topo — o site nunca deixa o usuário "cair" sem um próximo passo claro. Em mobile, todos os grids colapsam para coluna única, os stats viram carrossel horizontal com scroll-snap, o header mantém logo + hamburger + CTA sempre visíveis, e efeitos de cursor (Magnetic CTA, Radial Glow por mouse) são desligados em favor apenas dos reveals de scroll.

---

## Fundação Técnica & SEO (a camada invisível que faz o site vencer no orgânico)

Esta seção traduz a "disciplina WebFX" para uma implementação Next.js moderna, sem herdar nada do visual do WebFX — só o rigor.

### Stack obrigatória e não-negociáveis

- **Framework:** Next.js 15+ (App Router), Server Components por padrão — só usar `"use client"` onde há interatividade real (formulário, accordion, menu mobile, contadores animados)
- **Hospedagem:** Vercel (edge network, ISR nativo, Image Optimization automática)
- **Estilo:** Tailwind CSS v4 usando os tokens deste documento como `@theme` — evita CSS solto e mantém consistência de design system
- **Fontes:** General Sans carregada via `<link>` para a API hospedada da Fontshare (`api.fontshare.com`) no `<head>` do `layout.tsx` — **não** self-hostar os arquivos da fonte via `next/font/local`: a licença ITF Free Font License da Fontshare permite uso comercial livre, mas exige autorização por escrito para redistribuir/self-hostar os arquivos da fonte; a própria Fontshare instrui a usar a API deles para isso. Se um substituto do Google Fonts (Inter, ou outro geométrico) for usado no lugar, aí sim usar `next/font/google` para self-host de verdade
- **Imagens:** `next/image` em 100% das imagens — AVIF/WebP automático, lazy loading nativo, `priority` apenas na imagem do hero
- **Formulário:** Server Action nativa do Next.js (sem backend separado) + serviço de envio (Resend, ou integração direta com CRM/WhatsApp Business API) — sem necessidade de banco de dados, sem autenticação, sem dashboard
- **Analytics:** GA4 + Google Tag Manager (para rastrear cliques em CTA, envios de formulário, scroll depth) — carregado via `next/script` com `strategy="afterInteractive"` para não bloquear o LCP
- **Sem complexidade desnecessária:** nada de CMS headless pesado se o conteúdo institucional for estático; usar MDX local ou um CMS leve (Sanity/Contentful "lite") apenas se o Blog/Recursos for atualizado com frequência por alguém não-dev — decisão a validar com o cliente, não assumir por padrão

### Core Web Vitals — metas

- **LCP < 2.0s** — hero image/heading pré-carregados, sem hero em vídeo autoplay pesado (se usar vídeo, poster estático + lazy load do vídeo real)
- **CLS < 0.05** — todo componente com dimensão reservada (`aspect-ratio`, `next/image` com width/height), fontes com `font-display: swap` e fallback de métrica ajustada via `next/font`
- **INP < 200ms** — motion via CSS/transform (nunca JS pesado no thread principal), formulário validado no cliente sem libs pesadas
- **Sem JS desnecessário:** evitar bibliotecas de animação pesadas (ex: three.js) a menos que uma seção específica realmente peça um elemento 3D de assinatura — preferir CSS transitions e `Intersection Observer` nativo para fade-in on scroll

### SEO técnico — checklist obrigatório por página

- **Metadata API do Next.js** (`generateMetadata`) em toda rota — title único (50–60 caracteres), description única (140–160 caracteres) com CTA implícito, canonical explícito
- **Open Graph + Twitter Cards** completos em toda página pública (imagem 1200×630 própria por página, não genérica)
- **JSON-LD estruturado** via `<script type="application/ld+json">` server-rendered:
  - `Organization` / `ProfessionalService` no layout raiz (nome, logo, redes sociais, endereço)
  - `LocalBusiness` se houver endereço físico relevante para SEO local
  - `Service` em cada página de serviço (Google Ads, Meta Ads, SEO, etc.)
  - `FAQPage` em todo bloco de FAQ Accordion — captura featured snippets
  - `BreadcrumbList` em páginas internas
  - `Article` em posts de blog (autor, data de publicação, data de atualização)
  - `Review`/`AggregateRating` se houver depoimentos com nota
- **Sitemap.xml dinâmico** via `app/sitemap.ts`, atualizado automaticamente a cada novo post/case
- **Robots.txt** via `app/robots.ts`, liberando crawlers de IA relevantes (GPTBot, PerplexityBot, ClaudeBot) para otimizar também para GEO/AI Search — alinhado à tendência que o próprio WebFX documenta (AI Overviews, ChatGPT, Perplexity como novas fontes de tráfego)
- **Hierarquia de heading estrita:** um único `<h1>` por página (a headline do hero), `<h2>` para cada seção principal, `<h3>` para sub-blocos — nunca pular níveis, nunca usar heading por causa de tamanho de fonte
- **HTML semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` (cases/posts), `<footer>` — não `<div>` genérico para tudo
- **Alt text descritivo e funcional** em toda imagem (não decorativa) — descreve o que a imagem comunica, não "imagem 1"
- **URLs limpas e descritivas:** `/servicos/gestao-de-trafego-meta-ads`, não `/servicos?id=3`
- **Internal linking:** toda página de serviço linka para 2–3 posts de blog relacionados e 1–2 cases relevantes; todo post de blog linka de volta para a página de serviço correspondente — a malha interna que o WebFX faz de forma agressiva, aqui feita com curadoria editorial
- **Core Web Vitals monitorados** via Vercel Analytics + Search Console conectado desde o dia 1

### Acessibilidade (WCAG 2.1 AA como piso mínimo)

- Contraste mínimo AA em todo texto (`#8C8A84` sobre `#F5F1E8` precisa ser validado — usar `#707067` como variante mais escura para texto secundário pequeno se o contraste não passar)
- Navegação 100% por teclado, `focus-visible` com anel em `#F05A28` em todo elemento interativo
- `aria-label` em ícones sem texto (arrow button, hamburger, ícones sociais)
- Formulário com `<label>` associado a cada campo, mensagens de erro anunciadas via `aria-live`
- Respeitar `prefers-reduced-motion` — desativar/reduzir animações de scroll e contadores para quem pedir menos movimento

### Arquitetura de conteúdo para orgânico + campanhas pagas

- **Páginas de serviço profundas** (não uma página "Serviços" genérica): `/servicos/google-ads`, `/servicos/meta-ads`, `/servicos/seo`, `/servicos/social-media`, `/servicos/branding` — cada uma com sua própria promessa, prova, FAQ e CTA, pensada tanto para SEO quanto para ser destino de campanha paga (headline e oferta alinhadas ao anúncio que trouxe o clique)
- **Hub de Recursos/Blog** (`/recursos` ou `/blog`) como motor de autoridade orgânica e conteúdo para nutrir leads antes da conversão — pautas: benchmarks de CPA/CPL por nicho, guias práticos de Google/Meta Ads, estudos de caso detalhados, tendências de AI Search aplicadas a performance
- **Landing pages de campanha** desacopladas do menu principal (`/lp/[slug]`), sem nav de distração, focadas 100% em uma oferta e um formulário — para uso em campanhas pagas do Google/Meta, sem indexação (`noindex`) quando forem páginas de teste A/B
- **Página de Cases** com filtro por indústria/serviço, cada case com estrutura fixa: Desafio → Estratégia → Resultado (stats grandes) → Depoimento — a mesma lógica de prova que o WebFX usa, com o visual premium da Singular

## Voz & Copywriting

**Tom:** confiante, direto, sem jargão vazio de agência ("sinergia", "disruptivo"). Frases curtas, afirmativas, muitas vezes sem verbo auxiliar — o mesmo registro visto nas peças de marca ("IDEIAS QUE FAZEM DIFERENTE.", "DIFERENTE POR NATUREZA."). Uma frase de efeito por seção, seguida de uma explicação prática e sem inflar.

**Fórmulas de headline:**
- Afirmação curta + ponto final → "Boas marcas não são comuns."
- Headline com uma palavra de destaque em laranja → "Marcas mais relevantes para um **mundo real**."
- Pergunta direta de dor de negócio em página de serviço → "Seu Google Ads gasta mais do que converte?"

**CTAs:** sempre verbo de ação + benefício implícito, nunca genérico. Preferir "Falar com a gente", "Solicitar diagnóstico gratuito", "Ver resultados reais" a "Saiba mais" ou "Clique aqui".

**Prova sempre antes de promessa:** seguindo a disciplina WebFX, todo bloco de venda vem acompanhado de um número, um logo de cliente, ou um trecho de depoimento — nunca uma afirmação de qualidade sem lastro visível ao lado.

### Arquitetura de copy — arquivo central obrigatório

**Regra crítica: nenhum texto de UI é escrito direto dentro de componente/HTML.** Todo copy do site (headlines, eyebrows, subtextos, labels de CTA, itens de menu, texto de card, copy de footer, mensagens de formulário/erro, metadata de SEO) vive em um **arquivo central de conteúdo**, nunca hardcoded espalhado pelos componentes.

**Motivo:** dois cenários vão acontecer e precisam ser triviais de resolver sem tocar em código/layout — (1) adicionar um idioma (tradução), (2) mandar o copy pra um copywriter/copy master revisar e melhorar sem ele precisar mexer em componente nenhum.

- **Formato:** um arquivo por idioma — `content/copy.pt-BR.json` (ou `.ts` tipado, com `as const`) como fonte da verdade, estrutura em objeto aninhado por seção (`hero.eyebrow`, `hero.headline`, `hero.cta_primary`, `services.items[].title`, `footer.columns[].label`, etc.) — nunca uma lista plana sem contexto de onde o texto aparece
- **Componentes só consomem chaves**, nunca strings literais — o componente do Hero lê `copy.hero.headline`, não tem a frase escrita nele
- **Exportável para revisão humana:** a estrutura precisa ser simples o bastante pra virar planilha/CSV em um clique (chave → texto → contexto/seção) pra mandar pra um copywriter revisar fora do código
- **Tradução:** um novo idioma é um novo arquivo (`copy.en.json`) espelhando exatamente as mesmas chaves — nunca duplicar componentes por idioma
- Isso vale desde o protótipo/preview em Artifact — mesmo numa página de teste, o texto deve estar isolado num objeto de dados no topo do arquivo, não interpolado direto no markup, pra manter o hábito e facilitar copiar pro projeto real depois

## Agent Prompt Guide

**Quick Color Reference**
- text (sobre claro): `#181818`
- text secundário: `#8C8A84`
- text (sobre Deep Ink): `#FFFFFF`
- background: `#F5F1E8`
- background contraste: `#17202A`
- border: `#DED9CF`
- accent/primary action: `#F05A28`

**Example Component Prompts**

1. **Hero Section (Variante A — hero claro, é o padrão)** — "Crie uma hero full-bleed em Warm Ivory (#F5F1E8) com Blueprint Grid Overlay sutil e um Radial Glow laranja atrás do bloco de CTA. Header já nasce com fundo sólido e texto #181818 — nunca branco transparente sobre este fundo claro. Eyebrow tracked 13px uppercase '...' em #8C8A84, Orbit Dot Pair + Signature Dash abaixo. Headline 96px General Sans peso 700, #181818, line-height 1.0, última palavra em #F05A28. Subtexto 18px #8C8A84 max-width 560px. Dois CTAs lado a lado: Pill CTA primário laranja (com Magnetic CTA no hover) + Ghost Pill CTA. Todo o bloco entra com scroll reveal stagger. Sem sombra, sem gradiente exceto o Radial Glow contido."

2. **Dark Statement Block** — "Crie uma seção full-bleed #17202A (ou #141414 se a seção anterior já usou #17202A) com padding vertical 140px, Blueprint Grid Overlay a 4% de opacidade e uma textura fotográfica Higgsfield em baixa opacidade atrás do texto. Conteúdo centralizado max-width 720px, com scroll reveal. Eyebrow tracked #8C8A84, Orbit Dot Pair, Signature Dash laranja. Headline 72px peso 700 #FFFFFF com uma palavra em #F05A28. Sem card, sem sombra — o texto vive solto no espaço escuro."

3. **Service Card Grid** — "Crie um grid de 3 colunas de Feature Cards: fundo #FFFFFF, borda 1px #DED9CF, radius 12px, padding 36px, hover lift (translateY -4px + borda vira #F05A28 em 200ms). Heading 24px peso 600 #181818, body 16px #8C8A84. Arrow Link Button 32×32px canto superior direito com arrow nudge no hover, fundo rgba(23,32,42,0.06), hover vira #F05A28 sólido com ícone branco. Cards entram em scroll reveal com stagger de 80ms entre si."

4. **Stat Counter Row** — "Crie uma linha de 4 colunas sem cards. Número 64px peso 700 #F05A28 (ou #181818 sobre fundo claro), line-height 1.0, com count-up animado de 0 até o valor final em ~1300ms ao entrar no viewport (Intersection Observer threshold 0.4, respeitando prefers-reduced-motion). Label 13px uppercase tracked #8C8A84 abaixo."

5. **Pill CTA Primário** — "Crie um botão: fundo #F05A28, texto #FFFFFF 14px peso 600 uppercase tracking 0.04em, border-radius 9999px, padding 16px 32px, sem borda, sem sombra. Hover: fundo escurece 8%, transição 200ms ease. No hero, adicionar Magnetic CTA (atração sutil de até 8px em direção ao cursor num raio de 40px)."

6. **Sticky Header (checar SEMPRE antes de shippar)** — "Crie o header no estado real do topo da página: se o hero for Warm Ivory (padrão), o header já nasce com fundo #F5F1E8 a 92% + blur e texto #181818 — nunca transparente com texto branco. Só usar header transparente com texto branco se o hero por trás for comprovadamente escuro (foto/vídeo com overlay). Transição de 200-220ms no scroll para reforçar a borda inferior 1px #DED9CF."

## Non-Negotiables do Projeto

- **Next.js obrigatório** (App Router) — motivo: SEO nativo, Image Optimization, ISR, deploy trivial na Vercel
- **Site institucional/comercial, não sistema** — sem login, sem dashboard, sem área logada. Única conversão: formulário de contato/diagnóstico (+ telefone/WhatsApp visível)
- **Performance é feature de design** — qualquer decisão visual (vídeo pesado, biblioteca de animação, fonte extra) precisa justificar seu custo em Core Web Vitals antes de entrar
- **Escolher o mínimo de dependências que resolve o problema** — Tailwind + next/image + next/font + Server Actions cobrem 90% da necessidade real deste site; não adicionar state management, ORM, ou banco de dados sem necessidade concreta
- **Copy centralizado, nunca hardcoded em componente** — ver "Arquitetura de copy" em Voz & Copywriting; motivo: tradução futura e handoff pra copywriter precisam ser triviais

## Similar Brands

- **Wpromote** — estrutura de grid dinâmico, contadores de resultado grandes, arrow-buttons diagonais e tom "challenger" confiante — a espinha dorsal de layout e energia do site
- **R/GA** — restraint premium, tipografia enorme carregando a mensagem sozinha, paleta quase monocromática com silêncio como sinal de preço alto
- **WebFX** — não o visual, mas a disciplina de SEO técnico, arquitetura de conteúdo, prova social imediata e CTA sempre visível

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-singular-orange: #F05A28;
  --color-deep-ink: #17202A;
  --color-graphite-matte: #141414;
  --color-warm-ivory: #F5F1E8;
  --color-soft-black: #181818;
  --color-stone-gray: #8C8A84;
  --color-warm-gray: #DED9CF;
  --color-pure-white: #FFFFFF;
  --color-ink-muted: rgba(23, 32, 42, 0.65);
  --color-radial-glow: rgba(240, 90, 40, 0.18);

  /* Motion */
  --motion-fast: 180ms;
  --motion-base: 220ms;
  --motion-reveal: 600ms;
  --motion-counter: 1300ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: ease;

  /* Typography — Font Families */
  --font-display: 'General Sans', 'Aeonik', 'Clash Grotesk', Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 13px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 0.12em;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.55;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.01em;
  --text-heading: 40px;
  --leading-heading: 1.15;
  --tracking-heading: -0.015em;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.02em;
  --text-display: 96px;
  --leading-display: 1.0;
  --tracking-display: -0.02em;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1320px;
  --section-gap: 96-120px;
  --card-padding: 32-40px;
  --element-gap: 20px;

  /* Border Radius */
  --radius-buttons: 9999px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-media: 12px;

  /* Surfaces */
  --surface-canvas: #F5F1E8;
  --surface-card-light: #FFFFFF;
  --surface-deep-ink: #17202A;
  --surface-graphite-matte: #141414;
  --surface-dark-card: rgba(255, 255, 255, 0.06);
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-singular-orange: #F05A28;
  --color-deep-ink: #17202A;
  --color-graphite-matte: #141414;
  --color-warm-ivory: #F5F1E8;
  --color-soft-black: #181818;
  --color-stone-gray: #8C8A84;
  --color-warm-gray: #DED9CF;
  --color-pure-white: #FFFFFF;
  --color-radial-glow: rgba(240, 90, 40, 0.18);

  /* Typography */
  --font-display: 'General Sans', 'Aeonik', 'Clash Grotesk', Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-eyebrow: 13px;
  --leading-eyebrow: 1.4;
  --tracking-eyebrow: 0.12em;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.55;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.01em;
  --text-heading: 40px;
  --leading-heading: 1.15;
  --tracking-heading: -0.015em;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.02em;
  --text-display: 96px;
  --leading-display: 1.0;
  --tracking-display: -0.02em;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-full: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
}
```
