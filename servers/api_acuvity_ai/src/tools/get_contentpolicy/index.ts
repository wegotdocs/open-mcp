import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_contentpolicy",
  "toolDescription": "Retrieves the content policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/contentpolicies/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool