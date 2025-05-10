import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_check_public_membership_for_user",
  "toolDescription": "Check public organization membership for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/public_members/{username}",
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