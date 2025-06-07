import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth0_callback_api_auth_callback_post",
  "toolDescription": "Auth0 Callback",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/callback",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "redirect_uri": "redirect_uri"
    }
  },
  inputParamsSchema
}

export default tool