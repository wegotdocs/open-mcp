import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listvacationdayoff",
  "toolDescription": "List Vacation Day Off",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-day-off",
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
      "employeeIds": "employeeIds",
      "from": "from",
      "to": "to",
      "page": "page",
      "limit": "limit",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool