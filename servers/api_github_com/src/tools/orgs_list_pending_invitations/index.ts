import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_pending_invitations",
  "toolDescription": "List pending organization invitations",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/invitations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "role": "role",
      "invitation_source": "invitation_source"
    }
  },
  inputParamsSchema
}

export default tool