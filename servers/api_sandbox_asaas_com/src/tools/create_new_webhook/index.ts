import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_new_webhook",
  "toolDescription": "Create new Webhook",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/webhooks",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "url": "url",
      "email": "email",
      "enabled": "enabled",
      "interrupted": "interrupted",
      "apiVersion": "apiVersion",
      "authToken": "authToken",
      "sendType": "sendType",
      "events": "events"
    }
  },
  inputParamsSchema
}

export default tool