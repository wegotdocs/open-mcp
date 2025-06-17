import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_payment_cards_id_authorization",
  "toolDescription": "Authorize a Payment Card",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards/{id}/authorization",
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
      "gatewayAccountId": "gatewayAccountId",
      "amount": "amount"
    }
  },
  inputParamsSchema
}

export default tool