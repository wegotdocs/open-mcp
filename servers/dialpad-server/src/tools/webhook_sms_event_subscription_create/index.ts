import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webhook_sms_event_subscription_create",
  "toolDescription": "SMS Event -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/subscriptions/sms",
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
      "direction": "direction",
      "enabled": "enabled",
      "endpoint_id": "endpoint_id",
      "include_internal": "include_internal",
      "status": "status",
      "target_id": "target_id",
      "target_type": "target_type"
    }
  },
  inputParamsSchema
}

export default tool