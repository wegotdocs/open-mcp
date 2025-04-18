import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_set_membership_for_user",
  "toolDescription": "Set organization membership for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/memberships/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    },
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool