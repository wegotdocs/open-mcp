import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_alertpolicy",
  "toolDescription": "Retrieve an Existing Alert Policy",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/alerts/{alert_uuid}",
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
      "alert_uuid": "alert_uuid"
    }
  },
  inputParamsSchema
}

export default tool