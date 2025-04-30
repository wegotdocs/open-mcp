import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_apiauthorization",
  "toolDescription": "Retrieves the apiauthorizations with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apiauthorizations/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool