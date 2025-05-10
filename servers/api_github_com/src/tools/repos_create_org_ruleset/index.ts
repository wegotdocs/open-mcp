import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_org_ruleset",
  "toolDescription": "Create an organization repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
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