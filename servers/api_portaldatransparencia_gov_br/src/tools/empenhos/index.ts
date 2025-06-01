import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "empenhos",
  "toolDescription": "Consulta os empenhos de uma licitação",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes/empenhos",
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
      "codigoUG": "codigoUG",
      "numero": "numero",
      "codigoModalidade": "codigoModalidade",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool