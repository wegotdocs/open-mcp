import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_actions_cache_by_id",
  "toolDescription": "Delete a GitHub Actions cache for a repository (using a cache ID)",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/caches/{cache_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "cache_id": "cache_id"
    }
  },
  inputParamsSchema
}

export default tool