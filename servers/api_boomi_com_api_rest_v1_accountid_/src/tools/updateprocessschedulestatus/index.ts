import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprocessschedulestatus",
  "toolDescription": "Modifies or updates a ProcessScheduleStatus object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ProcessScheduleStatus/{id}",
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
      "atomId": "atomId",
      "enabled": "enabled",
      "id": "b_id",
      "processId": "processId"
    }
  },
  inputParamsSchema
}

export default tool