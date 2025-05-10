import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_providerteam",
  "toolDescription": "Retrieve a provier team given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerteams/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool