import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acordoleniencia",
  "toolDescription": "Consulta um registro de Acordo de Leniência pelo id",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/acordos-leniencia/{id}",
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
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool