import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/users/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "date_joined_after": "date_joined_after",
      "date_joined_before": "date_joined_before",
      "email": "email",
      "first_name": "first_name",
      "id": "id",
      "is_active": "is_active",
      "is_superuser": "is_superuser",
      "last_login_after": "last_login_after",
      "last_login_before": "last_login_before",
      "last_name": "last_name",
      "limit": "limit",
      "o": "o",
      "offset": "offset",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool