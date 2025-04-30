import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_providerteam",
  "toolDescription": "Delete a provier team given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerteams/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool