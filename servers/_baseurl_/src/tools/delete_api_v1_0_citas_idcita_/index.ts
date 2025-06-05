import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v1_0_citas_idcita_",
  "toolDescription": "citas/{idCita}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/citas/{idCita}",
  "method": "delete",
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
      "idCita": "idCita"
    }
  },
  inputParamsSchema
}

export default tool