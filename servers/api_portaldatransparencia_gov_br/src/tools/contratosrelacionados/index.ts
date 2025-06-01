import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contratosrelacionados",
  "toolDescription": "Consulta os contratos relacionados a licitação",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes/contratos-relacionados-licitacao",
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
      "codigoUG": "codigoUG",
      "numero": "numero",
      "codigoModalidade": "codigoModalidade"
    }
  },
  inputParamsSchema
}

export default tool