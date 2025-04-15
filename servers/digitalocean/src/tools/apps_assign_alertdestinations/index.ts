import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_assign_alertdestinations",
  "toolDescription": "Update destinations for alerts",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/alerts/{alert_id}/destinations",
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
      "app_id": "app_id",
      "alert_id": "alert_id"
    },
    "body": {
      "emails": "emails",
      "slack_webhooks": "slack_webhooks"
    }
  },
  inputParamsSchema
}

export default tool