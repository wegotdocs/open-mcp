import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_subscription_credit_card",
  "toolDescription": "Update credit card without charging the subscription",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/{id}/creditCard",
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
      "creditCard": "creditCard",
      "creditCardHolderInfo": "creditCardHolderInfo",
      "creditCardToken": "creditCardToken",
      "remoteIp": "remoteIp"
    }
  },
  inputParamsSchema
}

export default tool