import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "power_vps_vps_vps_id_power_power_type_post",
  "toolDescription": "Control server power",
  "baseUrl": "https://api.example.com",
  "path": "/vps/{vps_id}/power/{power_type}",
  "method": "post",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "vps_id": "vps_id",
      "power_type": "power_type"
    }
  },
  inputParamsSchema
}

export default tool