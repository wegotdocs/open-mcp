import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auxiliobrasilpormunicipio",
  "toolDescription": "Consulta as parcelas do Auxílio Brasil por Município",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/auxilio-brasil-por-municipio",
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