import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_paypal_accounts_id_activation",
  "toolDescription": "Activate a PayPal Account",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/paypal-accounts/{id}/activation",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "websiteId": "websiteId",
      "currency": "currency",
      "amount": "amount",
      "redirectURLs": "redirectURLs",
      "gatewayAccountId": "gatewayAccountId"
    }
  },
  inputParamsSchema
}

export default tool