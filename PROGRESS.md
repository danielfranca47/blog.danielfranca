# PROGRESS.md — Estado do projecto blog-danielfranca

## Última sessão
Data: 2026-04-26
Commits: imagem: imagens reais adicionadas

## Feito
- Sistema dinâmico de posts (posts.json + articles/)
- Routing real com history API + 404.html SPA fallback
- 7 artigos no posts.json (1 real + 6 rascunhos)
- 8 drafts visíveis em Categorias com label "Em breve"
- Calendly ligado a todos os 5 CTAs de agendamento
- favicon.svg, robots.txt, sitemap.xml, CNAME
- build-sitemap.js para regenerar sitemap
- ARTICLE_TEMPLATE.html como referência de formato
- Web3Forms ligado ao formulário de contacto (AJAX, feedback inline, honeypot anti-spam)
- MailerLite ligado à newsletter (AJAX no-cors, mantém identidade visual existente)
- renderArticle valida resposta do fetch (rejeita HTML completo / SPA fallback do servidor) — evita injecção de index.html dentro do art-body
- Domínio corrigido para blog.danielfranca.pt (CNAME, sitemap.xml, robots.txt, build-sitemap.js, index.html)
- Deploy: GitHub Pages activado + Cloudflare DNS configurado
- Imagens reais ligadas: foto-perfil.webp (avatar Sobre mim + avatar artigo), thumb-{ia,marketing,automacoes,estrategia}.webp (card destaque dinâmico por categoria), og-image.webp (meta og:image + twitter:image). CSS intacto, só `object-fit: cover` inline em cada `<img>`. Função `initials()` removida (dead code).

## A fazer (por ordem)
- [ ] Conteúdo real dos 6 artigos rascunho
- [ ] (opcional) Aproveitar hero-homepage.webp na hero da home (requer ajuste CSS)
- [ ] (opcional) Substituir favicon.svg por favicon.webp se preferido

## Serviços externos
- Calendly: https://calendly.com/danielfrancadigital/30min
- Web3Forms: access key 967f0713-8b14-4ec4-bdf1-e3b16ee2483e (ligado)
- MailerLite: form 185734002680792448, account 2293057 (ligado)

## Artigos
| Slug | Estado |
|------|--------|
| ia-negocios-locais-2025 | conteúdo real |
| follow-up-que-nao-parece-follow-up | rascunho |
| crm-para-autonomos | rascunho |
| proposta-comercial-que-convence | rascunho |
| agentes-de-ia-para-vendas | rascunho |
| trafego-pago-negocios-locais | rascunho |
| whatsapp-business-automacao | rascunho |
