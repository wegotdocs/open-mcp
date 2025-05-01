import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "attachablecreate",
  "toolDescription": "Attachable-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/attachable",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "AttachableRef": "AttachableRef",
      "Id": "Id",
      "MetaData": "MetaData",
      "Note": "Note",
      "SyncToken": "SyncToken",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool