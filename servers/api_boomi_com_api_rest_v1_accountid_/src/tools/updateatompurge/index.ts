import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateatompurge",
  "toolDescription": "Modifies or updates an AtomPurge object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AtomPurge/{id}",
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
      "atomId": "atomId"
    }
  },
  inputParamsSchema
}

export default tool