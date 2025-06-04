import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listemployeescheduletemplate",
  "toolDescription": "List employee schedule template",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/employees/{employeeId}/schedule-templates",
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
    "path": {
      "employeeId": "employeeId"
    },
    "query": {
      "from": "from",
      "to": "to",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool