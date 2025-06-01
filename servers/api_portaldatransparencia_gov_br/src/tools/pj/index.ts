import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pj",
  "toolDescription": "Consulta os registros de Pessoas Jurídicas",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/pessoa-juridica",
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
      "cnpj": "cnpj"
    }
  },
  inputParamsSchema
}

export default tool