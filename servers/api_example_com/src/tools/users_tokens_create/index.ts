import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_tokens_create",
  "toolDescription": "Post a list of token objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/tokens/",
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
      "user": "user",
      "expires": "expires",
      "last_used": "last_used",
      "key": "key",
      "write_enabled": "write_enabled",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool