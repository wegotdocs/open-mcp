import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pacconfig",
  "toolDescription": "Retrieve an pacconfig given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pacconfigs/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool