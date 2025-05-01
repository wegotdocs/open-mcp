import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cdcread",
  "toolDescription": "CDC-Read",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/cdc",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "entities": "entities",
      "changedSince": "changedSince"
    }
  },
  inputParamsSchema
}

export default tool