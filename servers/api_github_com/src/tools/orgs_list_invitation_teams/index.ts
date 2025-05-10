import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_invitation_teams",
  "toolDescription": "List organization invitation teams",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/invitations/{invitation_id}/teams",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "invitation_id": "invitation_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool