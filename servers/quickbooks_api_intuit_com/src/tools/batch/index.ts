import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "batch",
  "toolDescription": "Batch",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/batch",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "BatchItemRequest": "BatchItemRequest"
    }
  },
  inputParamsSchema
}

export default tool