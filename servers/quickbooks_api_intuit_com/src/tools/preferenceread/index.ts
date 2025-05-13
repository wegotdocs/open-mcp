import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "preferenceread",
  "toolDescription": "Preference-Read",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/preferences",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation",
      "minorversion": "minorversion"
    }
  },
  inputParamsSchema
}

export default tool