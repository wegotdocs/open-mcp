import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_contact_contacts_companyid_customid_patch",
  "toolDescription": "Update contact",
  "baseUrl": "https://api.example.com",
  "path": "/contacts/{companyId}/{customId}",
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
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool