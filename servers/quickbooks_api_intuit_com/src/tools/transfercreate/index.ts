import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfercreate",
  "toolDescription": "Transfer-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/transfer",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "SyncToken": "SyncToken"
    }
  },
  inputParamsSchema
}

export default tool