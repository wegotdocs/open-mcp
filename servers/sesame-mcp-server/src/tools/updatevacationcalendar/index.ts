import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatevacationcalendar",
  "toolDescription": "Update Vacation Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-calendars/{id}",
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
      "id": "id"
    },
    "body": {
      "daysOff": "daysOff",
      "maxDaysOff": "maxDaysOff"
    }
  },
  inputParamsSchema
}

export default tool