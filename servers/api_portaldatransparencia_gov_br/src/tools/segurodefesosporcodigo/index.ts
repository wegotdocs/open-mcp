import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "segurodefesosporcodigo",
  "toolDescription": "Consulta os registros Seguro Defeso por CPF/NIS",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/seguro-defeso-codigo",
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