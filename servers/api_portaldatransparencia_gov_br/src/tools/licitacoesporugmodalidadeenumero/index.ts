import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licitacoesporugmodalidadeenumero",
  "toolDescription": "Consulta uma licitação pelo código da Unidade Gestora, número e modalidade",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/licitacoes/por-ug-modalidade-numero",
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