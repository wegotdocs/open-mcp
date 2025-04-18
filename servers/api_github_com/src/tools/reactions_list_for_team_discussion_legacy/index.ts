import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_list_for_team_discussion_legacy",
  "toolDescription": "List reactions for a team discussion (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions/{discussion_number}/reactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "discussion_number": "discussion_number"
    },
    "query": {
      "content": "content",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool