import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_gitbooktokens",
  "toolDescription": "List all available access policies.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/gitbooktokens",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool