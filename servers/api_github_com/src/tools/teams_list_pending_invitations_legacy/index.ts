import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_list_pending_invitations_legacy",
  "toolDescription": "List pending team invitations (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/invitations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool