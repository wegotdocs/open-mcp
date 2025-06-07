import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_user_api_auth_users_post",
  "toolDescription": "Create User",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/users",
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
      "password": "password",
      "email": "email",
      "full_name": "full_name",
      "is_admin": "is_admin"
    }
  },
  inputParamsSchema
}

export default tool