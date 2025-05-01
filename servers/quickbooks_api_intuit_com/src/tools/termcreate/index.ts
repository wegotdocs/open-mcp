import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "termcreate",
  "toolDescription": "Term-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/term",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Active": "Active",
      "DiscountPercent": "DiscountPercent",
      "DueDays": "DueDays",
      "Id": "Id",
      "Name": "Name",
      "SyncToken": "SyncToken",
      "Type": "Type",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool