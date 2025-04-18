import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_actions_cache_usage_by_repo_for_org",
  "toolDescription": "List repositories with GitHub Actions cache usage for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/cache/usage-by-repository",
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