import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "safrapornisoucpf",
  "toolDescription": "Consulta os registros Garantia-Safra por CPF/NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/safra-codigo-por-cpf-ou-nis",
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