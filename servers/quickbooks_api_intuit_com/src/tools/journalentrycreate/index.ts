import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journalentrycreate",
  "toolDescription": "JournalEntry-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/journalentry",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "SyncToken": "SyncToken",
      "createDate": "createDate",
      "Line": "Line",
      "DocNumber": "DocNumber",
      "PrivateNote": "PrivateNote",
      "TxnDate": "TxnDate",
      "TaxRateRef": "TaxRateRef",
      "TotalAmt": "TotalAmt",
      "MetaData": "MetaData"
    }
  },
  inputParamsSchema
}

export default tool