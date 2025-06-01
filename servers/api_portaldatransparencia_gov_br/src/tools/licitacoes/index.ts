import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licitacoes",
  "toolDescription": "Consulta todas as licitações do Poder Executivo Federal",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes",
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
      "dataInicial": "dataInicial",
      "dataFinal": "dataFinal",
      "codigoOrgao": "codigoOrgao",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool