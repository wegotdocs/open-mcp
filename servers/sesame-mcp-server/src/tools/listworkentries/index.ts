import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listworkentries",
  "toolDescription": "List Company Work Entries",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-entries",
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
      "employeeId": "employeeId",
      "from": "from",
      "to": "to",
      "updatedAt[gte]": "updatedAt[gte]",
      "updatedAt[lte]": "updatedAt[lte]",
      "onlyReturn": "onlyReturn",
      "limit": "limit",
      "page": "page",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool