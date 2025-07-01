import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_subscription_with_credit_card",
  "toolDescription": "Create subscription with credit card",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/",
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
      "customer": "customer",
      "billingType": "billingType",
      "value": "value",
      "nextDueDate": "nextDueDate",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "cycle": "cycle",
      "description": "description",
      "endDate": "endDate",
      "maxPayments": "maxPayments",
      "externalReference": "externalReference",
      "split": "split",
      "callback": "callback",
      "creditCard": "creditCard",
      "creditCardHolderInfo": "creditCardHolderInfo",
      "creditCardToken": "creditCardToken",
      "remoteIp": "remoteIp"
    }
  },
  inputParamsSchema
}

export default tool