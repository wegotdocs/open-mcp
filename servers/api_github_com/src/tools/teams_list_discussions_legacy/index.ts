import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_list_discussions_legacy",
  "toolDescription": "List discussions (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    },
    "query": {
      "direction": "direction",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool