import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listemployeemanagers",
  "toolDescription": "List employee managers",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-managers",
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
      "managerId": "managerId",
      "permission": "permission",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool