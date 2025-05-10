import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_ruleset_history",
  "toolDescription": "Get repository ruleset history",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/{ruleset_id}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ruleset_id": "ruleset_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool