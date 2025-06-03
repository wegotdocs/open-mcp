import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "smart_transfer_payment_create",
  "toolDescription": "Create payment",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/smart-transfers/payments",
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
      "preauthorizationId": "preauthorizationId",
      "recipientId": "recipientId",
      "amount": "amount",
      "description": "description",
      "clientPaymentId": "clientPaymentId"
    }
  },
  inputParamsSchema
}

export default tool