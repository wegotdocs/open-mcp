import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimatereadbyid",
  "toolDescription": "Estimate-ReadById",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/estimate/{estimateId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "estimateId": "estimateId"
    }
  },
  inputParamsSchema
}

export default tool