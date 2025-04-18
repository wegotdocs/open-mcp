import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_org_ruleset",
  "toolDescription": "Update an organization repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/{ruleset_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "ruleset_id": "ruleset_id"
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