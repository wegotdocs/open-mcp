import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_operation_operations_companyid_customid_patch",
  "toolDescription": "Update operation",
  "baseUrl": "https://api.example.com",
  "path": "/operations/{companyId}/{customId}",
  "method": "patch",
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
      "customId": "customId",
      "companyId": "companyId"
    },
    "body": {
      "status": "status",
      "paymentDate": "paymentDate",
      "chargeAccount": "chargeAccount",
      "contactAccount": "contactAccount",
      "issuanceDate": "issuanceDate",
      "dueDate": "dueDate",
      "accountingCode": "accountingCode",
      "accountingName": "accountingName",
      "operationsCustomIds": "operationsCustomIds",
      "concept": "concept",
      "amount": "amount",
      "accountingAmount": "accountingAmount",
      "currency": "currency",
      "accountingCurrency": "accountingCurrency",
      "exchangeRate": "exchangeRate",
      "paymentMethod": "paymentMethod",
      "contact": "contact",
      "additionalInfo": "additionalInfo",
      "invoiceGroupDocumentId": "invoiceGroupDocumentId",
      "sync": "sync",
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool