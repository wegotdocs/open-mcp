import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_queryrange",
  "toolDescription": "Retrieve a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queryranges/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool