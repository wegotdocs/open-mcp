import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_payment_cards",
  "toolDescription": "Create a Payment Card",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards",
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
      "id": "id",
      "customerId": "customerId",
      "pan": "pan",
      "bin": "bin",
      "last4": "last4",
      "expYear": "expYear",
      "expMonth": "expMonth",
      "cvv": "cvv",
      "billingAddress": "billingAddress",
      "token": "token",
      "safeHash": "safeHash",
      "status": "status",
      "brand": "brand",
      "bankCountry": "bankCountry",
      "bankName": "bankName",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool