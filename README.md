# Singular Agency

Site institucional da Singular Agency — Next.js 16 (App Router) + Tailwind v4, seguindo o design system em [`singular-agency-style-reference.md`](./singular-agency-style-reference.md).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19
- **Tailwind CSS v4** — tokens da marca em `src/app/globals.css` (`@theme`)
- **General Sans** via [Fontshare](https://api.fontshare.com) — carregada por `<link>` no `layout.tsx` (não é self-hosted: a licença da ITF exige autorização por escrito para redistribuir os arquivos da fonte, então não dá pra usar `next/font/local`)
- **Server Actions** para o formulário de contato (`src/lib/actions.ts`) — envia via [Resend](https://resend.com) quando `RESEND_API_KEY`/`CONTACT_FORM_TO_EMAIL` estão configuradas (ver `.env.example`); sem isso, a submissão só é logada no servidor

## Estrutura

```
src/
  app/            rotas (App Router), layout, metadata, sitemap.ts, robots.ts
  components/      componentes de UI (Header, Hero, cards, etc.)
  components/primitives/  elementos de assinatura visual (Signature Dash, Orbit Dot Pair, Blueprint Grid, Radial Glow)
  content/         copy.pt-BR.ts — fonte central de todo texto do site (ver regra em style-reference.md)
  lib/             server actions
public/images/
  logo/            assets oficiais de logo (processados para fundo transparente)
  photography/     imagens geradas via Higgsfield seguindo o brief de estilo da marca
```

## O que já está implementado

Home completa: header sticky, hero, logo marquee, grid de serviços, dark statement blocks, stats com count-up, case cards, testimonial, formulário de contato e mega footer.

## Próximos passos

- Páginas de serviço profundas (`/servicos/google-ads`, etc.)
- Hub de recursos/blog (`/recursos`)
- Páginas de case individuais
- JSON-LD adicional (`Service`, `FAQPage`, `BreadcrumbList`) nas páginas internas conforme forem criadas
