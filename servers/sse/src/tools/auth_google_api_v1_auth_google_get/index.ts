import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_google_api_v1_auth_google_get",
  "toolDescription": "Auth Google",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/google",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool