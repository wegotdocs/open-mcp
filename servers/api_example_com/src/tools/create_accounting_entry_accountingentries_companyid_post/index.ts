import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_accounting_entry_accountingentries_companyid_post",
  "toolDescription": "Create accounting entry",
  "baseUrl": "https://api.example.com",
  "path": "/accountingentries/{companyId}",
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
      "accountingCode": "accountingCode",
      "counterpartAccountingCode": "counterpartAccountingCode",
      "accountingName": "accountingName",
      "assetAmount": "assetAmount",
      "accountingAssetAmount": "accountingAssetAmount",
      "balance": "balance",
      "liabilityAmount": "liabilityAmount",
      "accountingLiabilityAmount": "accountingLiabilityAmount",
      "currency": "currency",
      "accountingCurrency": "accountingCurrency",
      "contactCustomId": "contactCustomId",
      "exchangeRate": "exchangeRate",
      "additionalInfo": "additionalInfo",
      "description": "description",
      "documentId": "documentId",
      "transactionsIds": "transactionsIds",
      "paymentId": "paymentId",
      "date": "date",
      "attributes": "attributes",
      "customId": "customId",
      "type": "type",
      "accountingEntryCode": "accountingEntryCode",
      "accountingEntryCodeId": "accountingEntryCodeId"
    }
  },
  inputParamsSchema
}

export default tool