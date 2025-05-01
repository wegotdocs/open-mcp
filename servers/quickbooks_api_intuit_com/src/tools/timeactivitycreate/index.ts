import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeactivitycreate",
  "toolDescription": "TimeActivity-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/timeactivity",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Id": "Id",
      "SyncToken": "SyncToken"
    }
  },
  inputParamsSchema
}

export default tool