import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_paths_api_debug_paths_get",
  "toolDescription": "Debug Paths",
  "baseUrl": "https://api.example.com",
  "path": "/api/debug/paths",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool