import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contratospornumero",
  "toolDescription": "Consulta um contrato do Poder Executivo Federal pelo número do contrato",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/contratos/numero",
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
      "numero": "numero",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool