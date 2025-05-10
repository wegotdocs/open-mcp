import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_list_members_in_org",
  "toolDescription": "List team members",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    },
    "query": {
      "role": "role",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool