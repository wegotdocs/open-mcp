import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logout_api_v3_auth_logout_post",
  "toolDescription": "Log out",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/auth/logout",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool