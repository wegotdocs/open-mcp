import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_contact_contacts_companyid_post",
  "toolDescription": "Create contact",
  "baseUrl": "https://api.example.com",
  "path": "/contacts/{companyId}",
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
      "tradeName": "tradeName",
      "legalName": "legalName",
      "taxId": "taxId",
      "contact": "contact",
      "address": "address",
      "contactType": "contactType",
      "type": "type",
      "accounts": "accounts",
      "paymentsAccounts": "paymentsAccounts",
      "additionalInfo": "additionalInfo",
      "accountingCode": "accountingCode",
      "paymentMethod": "paymentMethod",
      "paymentTerms": "paymentTerms",
      "attributes": "attributes",
      "customId": "customId"
    }
  },
  inputParamsSchema
}

export default tool