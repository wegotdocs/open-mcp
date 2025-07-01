import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_existing_webhook",
  "toolDescription": "Update Existing Webhook",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/webhooks/{id}",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "url": "url",
      "sendType": "sendType",
      "enabled": "enabled",
      "interrupted": "interrupted",
      "authToken": "authToken",
      "events": "events"
    }
  },
  inputParamsSchema
}

export default tool