import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_success_api_v1_auth_success_get",
  "toolDescription": "Auth Success",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/success",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "session_token": "session_token"
    }
  },
  inputParamsSchema
}

export default tool