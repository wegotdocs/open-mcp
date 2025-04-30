import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sink",
  "toolDescription": "Retrieves the sink with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/sinks/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool