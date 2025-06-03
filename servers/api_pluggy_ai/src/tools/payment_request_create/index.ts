import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_request_create",
  "toolDescription": "Create",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/requests",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "amount": "amount",
      "description": "description",
      "callbackUrls": "callbackUrls",
      "recipientId": "recipientId",
      "customerId": "customerId",
      "clientPaymentId": "clientPaymentId",
      "schedule": "schedule"
    }
  },
  inputParamsSchema
}

export default tool