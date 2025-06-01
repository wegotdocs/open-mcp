import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgaossiafi",
  "toolDescription": "Consulta de órgãos cadastrados no Sistema Integrado de Administração Financeira do Governo Federal (SIAFI)",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/orgaos-siafi",
  "method": "get",
  "security": [
    {
      "key": "chave-api-dados",
      "value": "<mcp-env-var>CHAVE_API_DADOS</mcp-env-var>",
      "in": "header",
      "envVarName": "CHAVE_API_DADOS"
    }
  ],
  "paramsMap": {
    "query": {
      "codigo": "codigo",
      "descricao": "descricao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool