import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "employeecreate",
  "toolDescription": "Employee-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/employee",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Active": "Active",
      "BillableTime": "BillableTime",
      "DisplayName": "DisplayName",
      "FamilyName": "FamilyName",
      "GivenName": "GivenName",
      "Id": "Id",
      "MetaData": "MetaData",
      "PrimaryAddr": "PrimaryAddr",
      "PrimaryPhone": "PrimaryPhone",
      "PrintOnCheckName": "PrintOnCheckName",
      "SSN": "SSN",
      "SyncToken": "SyncToken",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool