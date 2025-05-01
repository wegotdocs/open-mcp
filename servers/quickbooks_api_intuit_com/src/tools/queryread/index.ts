import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "queryread",
  "toolDescription": "Query-Read",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyId}/query",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "companyId": "companyId"
    },
    "query": {
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool