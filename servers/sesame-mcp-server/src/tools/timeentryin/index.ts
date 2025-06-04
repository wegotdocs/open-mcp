import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentryin",
  "toolDescription": "Time Entry In",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/time-entries/start",
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
      "coordinates": "coordinates"
    }
  },
  inputParamsSchema
}

export default tool