import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "password_update",
  "toolDescription": "პაროლის განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/auth/password/reset",
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
      "token": "token",
      "email": "email",
      "password": "password",
      "password_confirmation": "password_confirmation"
    }
  },
  inputParamsSchema
}

export default tool