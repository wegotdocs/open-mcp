import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_repo_ruleset",
  "toolDescription": "Create a repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "target": "target",
      "enforcement": "enforcement",
      "bypass_actors": "bypass_actors",
      "conditions": "conditions",
      "rules": "rules"
    }
  },
  inputParamsSchema
}

export default tool