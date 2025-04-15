import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uptime_create_alert",
  "toolDescription": "Create a New Alert",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/uptime/checks/{check_id}/alerts",
  "method": "post",
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
      "check_id": "check_id"
    }
  },
  inputParamsSchema
}

export default tool