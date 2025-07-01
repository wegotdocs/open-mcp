import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pay_a_charge_with_credit_card",
  "toolDescription": "Pay a charge with a credit card",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}/payWithCreditCard",
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
    "path": {
      "id": "id"
    },
    "body": {
      "creditCard": "creditCard",
      "creditCardHolderInfo": "creditCardHolderInfo",
      "creditCardToken": "creditCardToken"
    }
  },
  inputParamsSchema
}

export default tool