import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignemployeetooffice",
  "toolDescription": "Assign an employee to an office",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employee-office-assignations",
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
      "officeId": "officeId"
    }
  },
  inputParamsSchema
}

export default tool