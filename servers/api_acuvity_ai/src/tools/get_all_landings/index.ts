import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_landings",
  "toolDescription": "List all available landings.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/landings",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool