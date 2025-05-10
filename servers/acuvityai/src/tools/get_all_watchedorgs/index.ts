import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_watchedorgs",
  "toolDescription": "List of watched organizations.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/watchedorgs",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool