import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_especialistas_idespecialista_",
  "toolDescription": "especialistas/{idEspecialista}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/especialistas/{idEspecialista}",
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
      "idEspecialista": "idEspecialista"
    }
  },
  inputParamsSchema
}

export default tool