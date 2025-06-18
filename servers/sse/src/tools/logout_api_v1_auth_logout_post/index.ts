import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logout_api_v1_auth_logout_post",
  "toolDescription": "Logout",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/logout",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool