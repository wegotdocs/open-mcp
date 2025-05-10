import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ignoreddomain",
  "toolDescription": "Retrieve an ignored domain given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/ignoreddomains/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool