import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_assign_user_to_org_role",
  "toolDescription": "Assign an organization role to a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/users/{username}/{role_id}",
  "method": "put",
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