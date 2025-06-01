import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bpcpornisoucpf",
  "toolDescription": "Consulta os registros de Benefício de Prestação Continuada por CPF/NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/bpc-por-cpf-ou-nis",
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
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool