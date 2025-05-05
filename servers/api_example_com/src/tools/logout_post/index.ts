import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logout_post",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/logout",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool