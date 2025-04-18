import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_check_blocked_user",
  "toolDescription": "Check if a user is blocked by an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/blocks/{username}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool