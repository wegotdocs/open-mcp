import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "logout_get",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/logout",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool