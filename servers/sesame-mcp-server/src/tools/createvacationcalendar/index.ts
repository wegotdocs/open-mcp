import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvacationcalendar",
  "toolDescription": "Create Vacation Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-calendars",
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
      "vacationConfigurationId": "vacationConfigurationId",
      "year": "year",
      "daysOff": "daysOff"
    }
  },
  inputParamsSchema
}

export default tool