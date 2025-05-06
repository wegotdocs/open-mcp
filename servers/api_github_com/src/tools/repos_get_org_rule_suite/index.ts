import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_org_rule_suite",
  "toolDescription": "Get an organization rule suite",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/rule-suites/{rule_suite_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "rule_suite_id": "rule_suite_id"
    }
  },
  inputParamsSchema
}

export default tool