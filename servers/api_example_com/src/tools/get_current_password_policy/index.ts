import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_current_password_policy",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/local/passwordPolicy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool