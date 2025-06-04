import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unassignemployeefromdepartments",
  "toolDescription": "Unassign employee from department",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-department-assignations",
  "method": "delete",
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
      "departmentId": "departmentId"
    }
  },
  inputParamsSchema
}

export default tool