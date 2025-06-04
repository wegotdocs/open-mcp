import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignholidaycalendartoemployee",
  "toolDescription": "Assign Holiday Calendar To Employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holidays/{holidayCalendarId}/employees",
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
    "path": {
      "holidayCalendarId": "holidayCalendarId"
    },
    "body": {
      "employees": "employees",
      "startDate": "startDate"
    }
  },
  inputParamsSchema
}

export default tool