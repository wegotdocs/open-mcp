import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bpc",
  "toolDescription": "Consulta os registros de Benefício de Prestação Continuada por Município",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/bpc-por-municipio",
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
      "mesAno": "mesAno",
      "codigoIbge": "codigoIbge",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool