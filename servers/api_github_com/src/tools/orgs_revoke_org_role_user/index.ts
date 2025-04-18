import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_revoke_org_role_user",
  "toolDescription": "Remove an organization role from a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/users/{username}/{role_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username",
      "role_id": "role_id"
    }
  },
  inputParamsSchema
}

export default tool