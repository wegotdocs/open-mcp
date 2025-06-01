import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "documentosrelacionadosaocontrato",
  "toolDescription": "Consulta os documentos relacionados a um contrato pelo id do contrato",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/contratos/documentos-relacionados",
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
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool