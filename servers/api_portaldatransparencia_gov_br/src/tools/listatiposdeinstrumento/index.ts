import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listatiposdeinstrumento",
  "toolDescription": "Consulta os tipos de instrumentos usados nos convênios",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/convenios/tipo-instrumento",
  "method": "get",
  "security": [
    {
      "key": "chave-api-dados",
      "value": "<mcp-env-var>CHAVE_API_DADOS</mcp-env-var>",
      "in": "header",
      "envVarName": "CHAVE_API_DADOS"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool