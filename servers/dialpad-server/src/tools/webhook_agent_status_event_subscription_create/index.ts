import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webhook_agent_status_event_subscription_create",
  "toolDescription": "Agent Status -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/subscriptions/agent_status",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "agent_type": "agent_type",
      "enabled": "enabled",
      "endpoint_id": "endpoint_id"
    }
  },
  inputParamsSchema
}

export default tool