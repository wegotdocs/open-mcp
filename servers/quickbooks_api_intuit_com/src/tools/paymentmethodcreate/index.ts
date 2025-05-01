import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentmethodcreate",
  "toolDescription": "PaymentMethod-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/paymentmethod",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Active": "Active",
      "Id": "Id",
      "MetaData": "MetaData",
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