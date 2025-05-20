import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_users_partial_update",
  "toolDescription": "Patch a user object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/users/{id}/",
  "method": "patch",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "username": "username",
      "password": "password",
      "first_name": "first_name",
      "last_name": "last_name",
      "email": "email",
      "is_staff": "is_staff",
      "is_active": "is_active",
      "date_joined": "date_joined",
      "last_login": "last_login",
      "groups": "groups",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool