import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "notafiscal",
  "toolDescription": "Consulta uma nota fiscal eletrônica (NFe) do Poder Executivo Federal pela chave única",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/notas-fiscais-por-chave",
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
      "chaveUnicaNotaFiscal": "chaveUnicaNotaFiscal"
    }
  },
  inputParamsSchema
}

export default tool