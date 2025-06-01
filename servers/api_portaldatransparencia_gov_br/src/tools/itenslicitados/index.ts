import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "itenslicitados",
  "toolDescription": "Consulta os itens licitados pelo id licitação",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes/itens-licitados",
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
      "id": "id",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool