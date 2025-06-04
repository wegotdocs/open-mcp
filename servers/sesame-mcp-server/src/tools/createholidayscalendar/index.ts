import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createholidayscalendar",
  "toolDescription": "Create Holidays Calendar",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/holiday-calendar",
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
      "name": "name",
      "daysOff": "daysOff"
    }
  },
  inputParamsSchema
}

export default tool