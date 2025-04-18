import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_installation_repos_for_authenticated_user",
  "toolDescription": "List repositories accessible to the user access token",
  "baseUrl": "https://api.github.com",
  "path": "/user/installations/{installation_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "installation_id": "installation_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool