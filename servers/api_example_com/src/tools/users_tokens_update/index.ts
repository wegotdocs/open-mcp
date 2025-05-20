import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_tokens_update",
  "toolDescription": "Put a token object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/tokens/{id}/",
  "method": "put",
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