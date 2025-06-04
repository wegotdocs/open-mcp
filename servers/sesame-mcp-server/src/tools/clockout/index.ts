import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clockout",
  "toolDescription": "Ends the last work entry",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-entries/clock-out",
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
      "workEntryOut": "workEntryOut"
    }
  },
  inputParamsSchema
}

export default tool