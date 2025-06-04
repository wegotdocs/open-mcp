import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clockin",
  "toolDescription": "Starts a new work entry right now",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-entries/clock-in",
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
      "workEntryIn": "workEntryIn",
      "workCheckTypeId": "workCheckTypeId",
      "workBreakId": "workBreakId"
    }
  },
  inputParamsSchema
}

export default tool