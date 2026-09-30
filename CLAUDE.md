@AGENTS.md

# singular agency

## Geração de imagens (Higgsfield)

Para gerar imagens/vídeos neste projeto, siga esta ordem:

1. **Primeiro, tente normalmente pelas ferramentas MCP do Higgsfield** (`mcp__claude_ai_Higgsfield__*`, ex. `generate_image`, `generate_video`) — é o connector de conta já autenticado, conectado via claude.ai.
2. **Se isso falhar** (erro de OAuth/issuer mismatch, servidor desconectado, etc.), tente as alternativas já mapeadas:
   - Verificar se é só a sessão que perdeu a conexão (`/mcp` para conferir status).
   - Como último recurso, usar a API REST oficial do Higgsfield diretamente com API key (`cloud.higgsfield.ai/api-keys`), chamando `https://api.higgsfield.ai/...` com o header `Authorization: Key ${KEY_ID}:${KEY_SECRET}`.

Não tentar reconectar via `.mcp.json` de projeto (bridge `mcp.higgsfield.ai` local) — esse caminho tem um bug conhecido de OAuth (issuer mismatch, sem workaround do lado do cliente) e já foi removido deste projeto por não funcionar.

**Regra de conteúdo visual:** nenhuma peça deste projeto (site, mockup, preview) sai com fotografia/vídeo/ícone "placeholder" em CSS ou SVG improvisado no lugar de asset real. Se o Higgsfield não gerar a tempo (nenhuma das integrações acima funcionar), entregar ao usuário o prompt pronto em vez de inventar um substituto visual — ver "Produção de assets com Higgsfield" em `singular-agency-style-reference.md` para o brief completo e a regra de logo (sempre os arquivos `oficial - *.png`, nunca recriado em CSS).
