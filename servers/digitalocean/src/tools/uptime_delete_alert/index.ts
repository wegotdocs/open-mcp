import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uptime_delete_alert",
  "toolDescription": "Delete an Alert",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
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
      "check_id": "check_id",
      "alert_id": "alert_id"
    }
  },
  inputParamsSchema
}

export default tool