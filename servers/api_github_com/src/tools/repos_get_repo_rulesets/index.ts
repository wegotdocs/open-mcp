import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_rulesets",
  "toolDescription": "Get all repository rulesets",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets",
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
      "includes_parents": "includes_parents",
      "targets": "targets"
    }
  },
  inputParamsSchema
}

export default tool