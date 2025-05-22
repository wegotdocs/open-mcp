import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webhook_contact_event_subscription_create",
  "toolDescription": "Contact Event -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/subscriptions/contact",
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
      "contact_type": "contact_type",
      "enabled": "enabled",
      "endpoint_id": "endpoint_id"
    }
  },
  inputParamsSchema
}

export default tool