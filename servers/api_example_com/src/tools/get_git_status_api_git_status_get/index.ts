import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_git_status_api_git_status_get",
  "toolDescription": "Get Git Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool