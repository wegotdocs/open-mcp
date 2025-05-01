import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accountreadall",
  "toolDescription": "Account-ReadAll",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/query",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool