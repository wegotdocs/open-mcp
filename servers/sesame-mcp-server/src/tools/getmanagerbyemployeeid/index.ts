import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagerbyemployeeid",
  "toolDescription": "Get organization chart manager by employee id",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-profiles/organization-chart-managers/{employeeId}",
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
    }
  },
  inputParamsSchema
}

export default tool