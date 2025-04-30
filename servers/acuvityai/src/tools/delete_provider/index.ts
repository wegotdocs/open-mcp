import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_provider",
  "toolDescription": "Delete a provider given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providers/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool