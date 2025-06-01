import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "situacaoimovel",
  "toolDescription": "Consulta situações dos imóveis funcionais",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/situacao-imovel",
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