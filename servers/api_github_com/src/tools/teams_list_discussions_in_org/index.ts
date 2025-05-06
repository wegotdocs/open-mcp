import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_list_discussions_in_org",
  "toolDescription": "List discussions",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    },
    "query": {
      "direction": "direction",
      "per_page": "per_page",
      "page": "page",
      "pinned": "pinned"
    }
  },
  inputParamsSchema
}

export default tool