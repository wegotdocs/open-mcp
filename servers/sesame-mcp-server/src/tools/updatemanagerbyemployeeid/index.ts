import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatemanagerbyemployeeid",
  "toolDescription": "Update organization chart manager by employee id",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-profiles/organization-chart-managers/{employeeId}",
  "method": "put",
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
    "body": {
      "organizationChartManagerId": "organizationChartManagerId"
    }
  },
  inputParamsSchema
}

export default tool