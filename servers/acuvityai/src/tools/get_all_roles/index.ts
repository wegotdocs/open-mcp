import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_roles",
  "toolDescription": "List all roles.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/roles",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool