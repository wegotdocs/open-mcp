import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_auth_local_register",
  "toolDescription": "Register a user",
  "baseUrl": "http://localhost:1338/api",
  "path": "/auth/local/register",
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
      "username": "username",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool