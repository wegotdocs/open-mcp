import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_discussion_in_org",
  "toolDescription": "Get a discussion",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "discussion_number": "discussion_number"
    }
  },
  inputParamsSchema
}

export default tool