import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "documentos",
  "toolDescription": "Consulta todos os documentos de despesas",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/documentos",
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
      "unidadeGestora": "unidadeGestora",
      "gestao": "gestao",
      "dataEmissao": "dataEmissao",
      "fase": "fase",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool