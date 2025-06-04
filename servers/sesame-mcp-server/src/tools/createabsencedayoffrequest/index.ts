import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createabsencedayoffrequest",
  "toolDescription": "Create Absence Day Off Request",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/absence-day-off-requests",
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
      "type": "type",
      "daysOff": "daysOff",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool