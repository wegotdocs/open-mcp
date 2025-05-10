import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_repo_rule_suite",
  "toolDescription": "Get a repository rule suite",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "rule_suite_id": "rule_suite_id"
    }
  },
  inputParamsSchema
}

export default tool