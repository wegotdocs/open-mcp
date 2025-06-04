import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateabsencecalendar",
  "toolDescription": "Update Absence Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/absence-calendars/{id}",
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
      "daysOff": "daysOff"
    }
  },
  inputParamsSchema
}

export default tool