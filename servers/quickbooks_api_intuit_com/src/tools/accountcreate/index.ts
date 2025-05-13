import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accountcreate",
  "toolDescription": "Account-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/account",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "AccountSubType": "AccountSubType",
      "AccountType": "AccountType",
      "Active": "Active",
      "Classification": "Classification",
      "CurrencyRef": "CurrencyRef",
      "CurrentBalance": "CurrentBalance",
      "CurrentBalanceWithSubAccounts": "CurrentBalanceWithSubAccounts",
      "FullyQualifiedName": "FullyQualifiedName",
      "Id": "Id",
      "Name": "Name",
      "SubAccount": "SubAccount",
      "SyncToken": "SyncToken",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool