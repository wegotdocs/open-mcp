import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignemployeemanager",
  "toolDescription": "Assign an employee manager",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-managers",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "employeeId": "employeeId",
      "managerId": "managerId",
      "permission": "permission",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool