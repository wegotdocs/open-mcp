import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_users_id_password",
  "toolDescription": "Updates user's password with the specified newPassword",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/users/{id}/password",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "currentPassword": "currentPassword",
      "newPassword": "newPassword"
    }
  },
  inputParamsSchema
}

export default tool