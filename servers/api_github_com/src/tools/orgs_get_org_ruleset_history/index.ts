import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_org_ruleset_history",
  "toolDescription": "Get organization ruleset history",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/{ruleset_id}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "ruleset_id": "ruleset_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool