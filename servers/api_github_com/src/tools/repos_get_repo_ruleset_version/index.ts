import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_ruleset_version",
  "toolDescription": "Get repository ruleset version",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ruleset_id": "ruleset_id",
      "version_id": "version_id"
    }
  },
  inputParamsSchema
}

export default tool