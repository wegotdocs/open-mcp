import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_providertoken",
  "toolDescription": "Delete a providertoken given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providertokens/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool