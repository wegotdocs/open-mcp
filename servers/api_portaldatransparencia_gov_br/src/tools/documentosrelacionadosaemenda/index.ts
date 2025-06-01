import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "documentosrelacionadosaemenda",
  "toolDescription": "Consulta os documentos relacionados à emenda parlamentar pelo código da emenda",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/emendas/documentos/{codigo}",
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
      "codigo": "codigo"
    },
    "query": {
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool