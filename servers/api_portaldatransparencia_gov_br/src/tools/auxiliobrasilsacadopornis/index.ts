import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auxiliobrasilsacadopornis",
  "toolDescription": "Consulta as parcelas disponibilizadas pelo Auxílio Brasil pelo NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/auxilio-brasil-sacado-por-nis",
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