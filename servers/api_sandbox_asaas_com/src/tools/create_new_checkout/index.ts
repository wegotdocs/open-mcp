import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_new_checkout",
  "toolDescription": "Create new checkout",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/checkouts",
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
      "billingTypes": "billingTypes",
      "chargeTypes": "chargeTypes",
      "minutesToExpire": "minutesToExpire",
      "callback": "callback",
      "items": "items",
      "customerData": "customerData",
      "subscription": "subscription",
      "installment": "installment",
      "splits": "splits"
    }
  },
  inputParamsSchema
}

export default tool