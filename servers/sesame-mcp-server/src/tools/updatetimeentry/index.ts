import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetimeentry",
  "toolDescription": "Update Time Entry",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/time-entries/{id}",
  "method": "put",
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