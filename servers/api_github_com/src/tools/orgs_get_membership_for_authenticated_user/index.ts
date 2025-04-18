import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_membership_for_authenticated_user",
  "toolDescription": "Get an organization membership for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/memberships/orgs/{org}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool