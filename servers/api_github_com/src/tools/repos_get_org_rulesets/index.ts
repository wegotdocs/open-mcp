import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_org_rulesets",
  "toolDescription": "Get all organization repository rulesets",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "targets": "targets"
    }
  },
  inputParamsSchema
}

export default tool