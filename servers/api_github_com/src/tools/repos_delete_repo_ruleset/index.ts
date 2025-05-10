import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_repo_ruleset",
  "toolDescription": "Delete a repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/{ruleset_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ruleset_id": "ruleset_id"
    }
  },
  inputParamsSchema
}

export default tool