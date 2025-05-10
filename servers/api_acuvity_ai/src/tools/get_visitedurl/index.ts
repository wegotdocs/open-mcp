import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_visitedurl",
  "toolDescription": "Retrieve a report given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/visitedurls/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool