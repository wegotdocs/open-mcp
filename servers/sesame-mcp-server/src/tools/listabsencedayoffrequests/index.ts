import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listabsencedayoffrequests",
  "toolDescription": "List Absence Day Off Requests",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/absence-day-off-requests",
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
    "query": {
      "employeeId": "employeeId",
      "absencesValidator": "absencesValidator",
      "fromDayOff": "fromDayOff",
      "toDayOff": "toDayOff",
      "status": "status",
      "limit": "limit",
      "page": "page",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool