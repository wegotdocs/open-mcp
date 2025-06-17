import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_payment_cards_id_",
  "toolDescription": "Create a payment card with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards/{id}",
  "method": "put",
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