import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "consultavaloresrenuncia",
  "toolDescription": "Consulta de Valores Renunciados",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/renuncias-valor",
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
      "nomeSiglaUF": "nomeSiglaUF",
      "codigoIbge": "codigoIbge",
      "cnpj": "cnpj",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool