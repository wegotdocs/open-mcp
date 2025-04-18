import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_selected_repositories_enabled_github_actions_organi",
  "toolDescription": "List selected repositories enabled for GitHub Actions in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool