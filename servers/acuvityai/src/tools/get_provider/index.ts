import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_provider",
  "toolDescription": "Retrieve a provider given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providers/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool