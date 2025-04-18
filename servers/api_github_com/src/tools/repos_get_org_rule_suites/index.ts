import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_org_rule_suites",
  "toolDescription": "List organization rule suites",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/rule-suites",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "ref": "ref",
      "repository_name": "repository_name",
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