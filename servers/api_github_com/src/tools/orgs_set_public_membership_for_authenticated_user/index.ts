import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_set_public_membership_for_authenticated_user",
  "toolDescription": "Set public organization membership for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/public_members/{username}",
  "method": "put",
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