import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "documentosporfavorecido",
  "toolDescription": "Consulta Empenhos, Liquidações e Pagamentos emitidos para um favorecido",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/documentos-por-favorecido",
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
      "codigoPessoa": "codigoPessoa",
      "fase": "fase",
      "ano": "ano",
      "ug": "ug",
      "gestao": "gestao",
      "ordenacaoResultado": "ordenacaoResultado",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool