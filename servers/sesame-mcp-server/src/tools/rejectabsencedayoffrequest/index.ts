import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rejectabsencedayoffrequest",
  "toolDescription": "Reject Absence Day Off Request",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/absence-day-off-requests/{id}/reject",
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
      "resolutionComment": "resolutionComment",
      "managerId": "managerId"
    }
  },
  inputParamsSchema
}

export default tool