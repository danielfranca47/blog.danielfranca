# CLAUDE.md — Regras do projecto blog.danielfranca.pt

## Ficheiro de progresso
Lê sempre o PROGRESS.md no início de cada sessão.
Actualiza o PROGRESS.md no fim de cada sessão antes
do commit final.

## Identidade visual — PROTEGIDA
Nunca alteres cores, tipografia, border-radius, spacing ou
qualquer CSS existente sem pedido explícito com a frase
"podes alterar o CSS".

## Ficheiros protegidos
- index.html: só editar se eu disser "podes editar o index.html"
- posts.json: podes editar livremente para adicionar/actualizar posts
- articles/*: podes criar e editar livremente

## Estrutura de artigos
- Metadados: posts.json
- Conteúdo: articles/slug.html (só corpo HTML, sem head/nav/footer)
- Referência de formato: ARTICLE_TEMPLATE.html

## Commits obrigatórios
Após cada tarefa concluída faz sempre git commit com este formato:

  tipo: descrição curta em PT-PT

Tipos aceites:
  artigo   → novo artigo publicado
  fix      → correcção de bug
  style    → ajuste visual
  seo      → meta tags, sitemap, robots
  config   → configuração do projecto
  imagem   → adição ou substituição de imagens

Exemplos:
  "artigo: ia-negocios-locais-2025 publicado"
  "fix: routing hash corrigido em mobile"
  "config: CLAUDE.md criado"

## Workflow de publicação de artigos
1. Criar articles/slug.html com corpo do artigo
2. Adicionar entrada em posts.json
3. node build-sitemap.js
4. Actualizar PROGRESS.md
5. git commit "artigo: slug-do-artigo publicado"
Nunca ao contrário.

## Confirmação antes de editar
Antes de alterar qualquer ficheiro existente, listar
exactamente o que vai mudar e o que não vai ser tocado.
