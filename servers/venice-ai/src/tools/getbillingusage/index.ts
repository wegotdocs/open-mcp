import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbillingusage",
  "toolDescription": "/api/v1/billing/usage",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/billing/usage",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "currency": "currency",
      "endDate": "endDate",
      "limit": "limit",
      "page": "page",
      "sortOrder": "sortOrder",
      "startDate": "startDate"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool