import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "log_in_api_v3_auth_login_post",
  "toolDescription": "Log in",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "t": "t",
      "username": "username",
      "password": "password",
      "prefer_lang": "prefer_lang",
      "time_offset": "time_offset"
    }
  },
  inputParamsSchema
}

export default tool