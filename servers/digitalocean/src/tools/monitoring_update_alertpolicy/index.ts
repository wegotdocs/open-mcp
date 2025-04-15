import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_update_alertpolicy",
  "toolDescription": "Update an Alert Policy",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/alerts/{alert_uuid}",
  "method": "put",
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
    },
    "body": {
      "alerts": "alerts",
      "compare": "compare",
      "description": "description",
      "enabled": "enabled",
      "entities": "entities",
      "tags": "tags",
      "type": "type",
      "value": "value",
      "window": "window"
    }
  },
  inputParamsSchema
}

export default tool