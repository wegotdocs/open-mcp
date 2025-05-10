import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_team",
  "toolDescription": "Delete a team given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/teams/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool