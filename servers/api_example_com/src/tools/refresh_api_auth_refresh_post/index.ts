import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_api_auth_refresh_post",
  "toolDescription": "Refresh",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/refresh",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "refresh_token": "refresh_token"
    }
  },
  inputParamsSchema
}

export default tool