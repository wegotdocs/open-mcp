import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_currencies",
  "toolDescription": "Get currencies",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/currencies",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool