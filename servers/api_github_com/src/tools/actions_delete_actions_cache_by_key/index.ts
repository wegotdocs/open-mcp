import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_actions_cache_by_key",
  "toolDescription": "Delete GitHub Actions caches for a repository (using a cache key)",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/caches",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "key": "key",
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool