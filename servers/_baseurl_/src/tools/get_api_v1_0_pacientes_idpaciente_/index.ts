import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_pacientes_idpaciente_",
  "toolDescription": "pacientes/{idPaciente}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/pacientes/{idPaciente}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "idPaciente": "idPaciente"
    }
  },
  inputParamsSchema
}

export default tool