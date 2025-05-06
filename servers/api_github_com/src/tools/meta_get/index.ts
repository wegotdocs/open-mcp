import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "meta_get",
  "toolDescription": "Get GitHub meta information",
  "baseUrl": "https://api.github.com",
  "path": "/meta",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool