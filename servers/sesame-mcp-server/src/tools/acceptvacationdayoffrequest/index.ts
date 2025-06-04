import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acceptvacationdayoffrequest",
  "toolDescription": "Accept Vacation Day Off Request",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-day-off-requests/{id}/accept",
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
      "id": "id"
    },
    "body": {
      "managerId": "managerId"
    }
  },
  inputParamsSchema
}

export default tool