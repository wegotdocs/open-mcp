import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resize_vps_vps_resize_vps_id_vps_id_resize_plan_resize_plan_post",
  "toolDescription": "Upgrade/downgrade server",
  "baseUrl": "https://api.example.com",
  "path": "/vps/resize/vps_id/{vps_id}/resize_plan/{resize_plan}",
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
      "resize_plan": "resize_plan"
    }
  },
  inputParamsSchema
}

export default tool