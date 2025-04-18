import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_org_ruleset",
  "toolDescription": "Get an organization repository ruleset",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/{ruleset_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "ruleset_id": "ruleset_id"
    }
  },
  inputParamsSchema
}

export default tool