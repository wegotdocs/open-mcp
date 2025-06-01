import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "safradosbeneficiariospormunicipio",
  "toolDescription": "Consulta os registros Garantia-Safra dos beneficiários por município e mes/ano",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/safra-beneficiario-por-municipio",
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