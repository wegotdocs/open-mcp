import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "depositcreate",
  "toolDescription": "Deposit-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/deposit",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "Line": "Line",
      "SyncToken": "SyncToken",
      "CurrencyRef": "CurrencyRef",
      "PrivateNote": "PrivateNote",
      "DepositToAccountRef": "DepositToAccountRef",
      "TxnDate": "TxnDate",
      "TxnSource": "TxnSource",
      "DepartmentRef": "DepartmentRef"
    }
  },
  inputParamsSchema
}

export default tool