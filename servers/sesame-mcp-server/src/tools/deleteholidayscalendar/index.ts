import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteholidayscalendar",
  "toolDescription": "Delete Holidays Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holiday-calendar/{holidayCalendarId}",
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
    }
  },
  inputParamsSchema
}

export default tool