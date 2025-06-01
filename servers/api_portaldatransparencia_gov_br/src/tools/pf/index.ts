import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pf",
  "toolDescription": "Consulta os registros de Pessoas Físicas",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/pessoa-fisica",
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
      "cpf": "cpf",
      "nis": "nis"
    }
  },
  inputParamsSchema
}

export default tool