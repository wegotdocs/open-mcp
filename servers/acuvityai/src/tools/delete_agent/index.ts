import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_agent",
  "toolDescription": "Delete an agent given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agents/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool