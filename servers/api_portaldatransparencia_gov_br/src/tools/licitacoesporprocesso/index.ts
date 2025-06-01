import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licitacoesporprocesso",
  "toolDescription": "Consulta uma licitação pelo número do processo",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes/por-processo",
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
      "processo": "processo"
    }
  },
  inputParamsSchema
}

export default tool