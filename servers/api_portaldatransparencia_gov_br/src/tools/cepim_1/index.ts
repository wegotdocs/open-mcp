import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cepim_1",
  "toolDescription": "Consulta um registro do CEPIM pelo id",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/cepim/{id}",
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