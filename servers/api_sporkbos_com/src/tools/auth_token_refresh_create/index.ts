import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_token_refresh_create",
  "toolDescription": "Takes a refresh type JSON web token and returns an access type JSON web\ntoken if the refresh token is valid.",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/token/refresh/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "access": "access",
      "refresh": "refresh"
    }
  },
  inputParamsSchema
}

export default tool