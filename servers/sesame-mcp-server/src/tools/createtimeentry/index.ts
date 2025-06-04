import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtimeentry",
  "toolDescription": "Create Time Entry",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/time-entries",
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
      "projectId": "projectId",
      "tagIds": "tagIds",
      "comment": "comment",
      "timeEntryIn": "timeEntryIn",
      "timeEntryOut": "timeEntryOut"
    }
  },
  inputParamsSchema
}

export default tool