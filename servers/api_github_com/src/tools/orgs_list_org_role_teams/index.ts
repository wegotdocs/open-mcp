import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_org_role_teams",
  "toolDescription": "List teams that are assigned to an organization role",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/{role_id}/teams",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "role_id": "role_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool