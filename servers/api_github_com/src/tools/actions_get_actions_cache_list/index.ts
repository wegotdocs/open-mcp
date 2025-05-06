import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_actions_cache_list",
  "toolDescription": "List GitHub Actions caches for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/caches",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "ref": "ref",
      "key": "key",
      "sort": "sort",
      "direction": "direction"
    }
  },
  inputParamsSchema
}

export default tool