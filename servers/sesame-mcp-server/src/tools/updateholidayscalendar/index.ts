import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateholidayscalendar",
  "toolDescription": "Update Holidays Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holiday-calendar/{holidayCalendarId}",
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
      "holidayCalendarId": "holidayCalendarId"
    },
    "body": {
      "name": "name",
      "daysOff": "daysOff"
    }
  },
  inputParamsSchema
}

export default tool