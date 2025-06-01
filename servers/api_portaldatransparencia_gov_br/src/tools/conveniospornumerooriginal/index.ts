import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "conveniospornumerooriginal",
  "toolDescription": "Consulta um convênio do Poder Executivo Federal pelo número original do contrato",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/convenios/numero-original",
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
      "numeroOriginal": "numeroOriginal",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool