import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_tokens_provision_create",
  "toolDescription": "Non-authenticated REST API endpoint via which a user may create a Token.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/tokens/provision/",
  "method": "post",
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
    "body": {
      "expires": "expires",
      "write_enabled": "write_enabled",
      "description": "description",
      "username": "username",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool