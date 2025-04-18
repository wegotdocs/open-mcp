import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_remove_restrictions_for_authenticated_user",
  "toolDescription": "Remove interaction restrictions from your public repositories",
  "baseUrl": "https://api.github.com",
  "path": "/user/interaction-limits",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool