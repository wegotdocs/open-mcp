import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_set_restrictions_for_authenticated_user",
  "toolDescription": "Set interaction restrictions for your public repositories",
  "baseUrl": "https://api.github.com",
  "path": "/user/interaction-limits",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "limit": "limit",
      "expiry": "expiry"
    }
  },
  inputParamsSchema
}

export default tool