import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_rule_suites",
  "toolDescription": "List repository rule suites",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/rule-suites",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "ref": "ref",
      "time_period": "time_period",
      "actor_name": "actor_name",
      "rule_suite_result": "rule_suite_result",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool