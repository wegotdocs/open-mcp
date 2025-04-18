import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update_membership_for_authenticated_user",
  "toolDescription": "Update an organization membership for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/memberships/orgs/{org}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool