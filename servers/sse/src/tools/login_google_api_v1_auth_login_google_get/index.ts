import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_google_api_v1_auth_login_google_get",
  "toolDescription": "Login Google",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/login/google",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool