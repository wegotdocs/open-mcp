import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createabsencecalendar",
  "toolDescription": "Create Absence Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/absence-calendars",
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
      "absenceTypeId": "absenceTypeId",
      "year": "year",
      "daysOff": "daysOff"
    }
  },
  inputParamsSchema
}

export default tool