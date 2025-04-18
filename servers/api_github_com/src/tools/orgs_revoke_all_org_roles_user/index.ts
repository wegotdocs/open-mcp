import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_revoke_all_org_roles_user",
  "toolDescription": "Remove all organization roles for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/users/{username}",
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