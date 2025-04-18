import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_ruleset",
  "toolDescription": "Get a repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/{ruleset_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ruleset_id": "ruleset_id"
    },
    "query": {
      "includes_parents": "includes_parents"
    }
  },
  inputParamsSchema
}

export default tool