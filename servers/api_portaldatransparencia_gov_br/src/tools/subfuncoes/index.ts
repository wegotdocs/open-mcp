import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "subfuncoes",
  "toolDescription": "",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/despesas/funcional-programatica/subfuncoes",
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
      "anoInicio": "anoInicio",
      "codigo": "codigo",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool