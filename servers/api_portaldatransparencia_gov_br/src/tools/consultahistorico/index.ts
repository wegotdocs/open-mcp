import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "consultahistorico",
  "toolDescription": "Consulta o histórico de um item de empenho",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/itens-de-empenho/historico",
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
      "codigoDocumento": "codigoDocumento",
      "sequencial": "sequencial",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool