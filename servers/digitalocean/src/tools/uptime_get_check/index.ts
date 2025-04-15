import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uptime_get_check",
  "toolDescription": "Retrieve an Existing Check",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/uptime/checks/{check_id}",
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
      "check_id": "check_id"
    }
  },
  inputParamsSchema
}

export default tool