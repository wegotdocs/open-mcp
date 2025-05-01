import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vendorcreate",
  "toolDescription": "Vendor-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/vendor",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "AcctNum": "AcctNum",
      "Active": "Active",
      "Balance": "Balance",
      "BillAddr": "BillAddr",
      "CompanyName": "CompanyName",
      "CurrencyRef": "CurrencyRef",
      "DisplayName": "DisplayName",
      "FamilyName": "FamilyName",
      "GivenName": "GivenName",
      "Id": "Id",
      "Mobile": "Mobile",
      "PrimaryEmailAddr": "PrimaryEmailAddr",
      "PrimaryPhone": "PrimaryPhone",
      "PrintOnCheckName": "PrintOnCheckName",
      "Suffix": "Suffix",
      "SyncToken": "SyncToken",
      "TaxIdentifier": "TaxIdentifier",
      "Title": "Title",
      "Vendor1099": "Vendor1099",
      "WebAddr": "WebAddr",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool