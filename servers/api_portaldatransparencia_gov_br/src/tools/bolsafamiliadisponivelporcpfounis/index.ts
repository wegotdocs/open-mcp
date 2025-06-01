import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bolsafamiliadisponivelporcpfounis",
  "toolDescription": "Consulta as parcelas disponibilizadas pelo Bolsa Família pelo CPF/NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/bolsa-familia-disponivel-por-cpf-ou-nis",
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
      "codigo": "codigo",
      "anoMesReferencia": "anoMesReferencia",
      "anoMesCompetencia": "anoMesCompetencia",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool