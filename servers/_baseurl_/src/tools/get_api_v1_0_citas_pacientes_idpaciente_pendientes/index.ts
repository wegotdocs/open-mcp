import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_citas_pacientes_idpaciente_pendientes",
  "toolDescription": "citas/pacientes/{idPaciente}/pendientes",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/citas/pacientes/{idPaciente}/pendientes",
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