import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agent",
  "toolDescription": "Retrieve an agent given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agents/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool