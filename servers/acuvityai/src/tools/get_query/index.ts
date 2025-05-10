import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_query",
  "toolDescription": "Retrieve a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queries/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool