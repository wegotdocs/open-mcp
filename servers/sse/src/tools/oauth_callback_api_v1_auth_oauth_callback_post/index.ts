import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth_callback_api_v1_auth_oauth_callback_post",
  "toolDescription": "Oauth Callback",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/oauth/callback",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "code": "code",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool