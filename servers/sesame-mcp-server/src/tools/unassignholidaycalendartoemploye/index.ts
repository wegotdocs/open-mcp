import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unassignholidaycalendartoemploye",
  "toolDescription": "Unassign Holiday Calendar To Employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holidays/{holidayCalendarId}/employees",
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
    "path": {
      "holidayCalendarId": "holidayCalendarId"
    },
    "body": {
      "employees": "employees"
    }
  },
  inputParamsSchema
}

export default tool