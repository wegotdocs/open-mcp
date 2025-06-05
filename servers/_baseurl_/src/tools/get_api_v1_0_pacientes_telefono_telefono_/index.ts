import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_pacientes_telefono_telefono_",
  "toolDescription": "pacientes/telefono/{telefono}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/pacientes/telefono/{telefono}",
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
      "telefono": "telefono"
    }
  },
  inputParamsSchema
}

export default tool