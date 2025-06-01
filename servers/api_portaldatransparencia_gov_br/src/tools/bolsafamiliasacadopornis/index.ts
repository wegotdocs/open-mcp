import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bolsafamiliasacadopornis",
  "toolDescription": "Consulta as parcelas sacadas pelo Bolsa Família pelo NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/bolsa-familia-sacado-por-nis",
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
      "nis": "nis",
      "anoMesReferencia": "anoMesReferencia",
      "anoMesCompetencia": "anoMesCompetencia",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool