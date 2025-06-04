import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listemployeeentityscheduletemplates",
  "toolDescription": "List employee's entity schedule templates",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/employees/{employeeId}/entity-schedule-templates",
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