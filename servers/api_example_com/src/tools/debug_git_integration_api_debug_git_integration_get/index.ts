import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_git_integration_api_debug_git_integration_get",
  "toolDescription": "Debug Git Integration",
  "baseUrl": "https://api.example.com",
  "path": "/api/debug/git-integration",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool