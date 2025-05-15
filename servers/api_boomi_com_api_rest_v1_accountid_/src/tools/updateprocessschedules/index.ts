import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprocessschedules",
  "toolDescription": "Modifies or updates a ProcessSchedules object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ProcessSchedules/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "Retry": "Retry",
      "Schedule": "Schedule",
      "atomId": "atomId",
      "id": "b_id",
      "processId": "processId"
    }
  },
  inputParamsSchema
}

export default tool