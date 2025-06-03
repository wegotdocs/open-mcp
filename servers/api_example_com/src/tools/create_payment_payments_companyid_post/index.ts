import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_payment_payments_companyid_post",
  "toolDescription": "Create payment",
  "baseUrl": "https://api.example.com",
  "path": "/payments/{companyId}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "companyId": "companyId"
    },
    "body": {
      "method": "method",
      "transactionId": "transactionId",
      "operations": "operations",
      "productId": "productId",
      "contactCustomId": "contactCustomId",
      "date": "date",
      "concept": "concept",
      "amount": "amount",
      "accountingAmount": "accountingAmount",
      "currency": "currency",
      "accountingCurrency": "accountingCurrency",
      "exchangeRate": "exchangeRate",
      "additionalInfo": "additionalInfo",
      "attributes": "attributes",
      "customId": "customId"
    }
  },
  inputParamsSchema
}

export default tool