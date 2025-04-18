import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_get_restrictions_for_authenticated_user",
  "toolDescription": "Get interaction restrictions for your public repositories",
  "baseUrl": "https://api.github.com",
  "path": "/user/interaction-limits",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool