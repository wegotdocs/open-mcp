import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getemployeesbyholidaycalendar",
  "toolDescription": "Get Employees By Holiday Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holidays/{holidayCalendarId}/employees",
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
      "holidayCalendarId": "holidayCalendarId"
    },
    "query": {
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool