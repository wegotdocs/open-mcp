import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_accesspolicy",
  "toolDescription": "Retrieves the access policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/accesspolicies/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool