import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_login_login_0",
  "toolDescription": "ავტორიზაცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/auth/logout",
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
      "email": "email",
      "password": "password",
      "remember": "remember"
    }
  },
  inputParamsSchema
}

export default tool