import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_installment_with_credit_card",
  "toolDescription": "Create Installment with credit card",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/installments/",
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
      "installmentCount": "installmentCount",
      "customer": "customer",
      "value": "value",
      "totalValue": "totalValue",
      "billingType": "billingType",
      "dueDate": "dueDate",
      "description": "description",
      "postalService": "postalService",
      "daysAfterDueDateToRegistrationCancellation": "daysAfterDueDateToRegistrationCancellation",
      "paymentExternalReference": "paymentExternalReference",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "splits": "splits",
      "creditCard": "creditCard",
      "creditCardHolderInfo": "creditCardHolderInfo",
      "creditCardToken": "creditCardToken",
      "authorizeOnly": "authorizeOnly",
      "remoteIp": "remoteIp"
    }
  },
  inputParamsSchema
}

export default tool