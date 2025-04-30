import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_queryrange",
  "toolDescription": "Delete a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queryranges/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool