import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_visitedurls_id_",
  "toolDescription": "",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/visitedurls/{id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool