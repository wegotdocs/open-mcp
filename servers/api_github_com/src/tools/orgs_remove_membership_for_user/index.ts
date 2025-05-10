import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_remove_membership_for_user",
  "toolDescription": "Remove organization membership for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/memberships/{username}",
  "method": "delete",
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