import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignemployeetodepartment",
  "toolDescription": "Assign an employee to a department",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-department-assignations",
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
      "departmentId": "departmentId"
    }
  },
  inputParamsSchema
}

export default tool