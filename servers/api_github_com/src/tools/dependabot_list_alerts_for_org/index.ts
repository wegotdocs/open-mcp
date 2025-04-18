import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_list_alerts_for_org",
  "toolDescription": "List Dependabot alerts for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/dependabot/alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "state": "state",
      "severity": "severity",
      "ecosystem": "ecosystem",
      "package": "package",
      "epss_percentage": "epss_percentage",
      "scope": "scope",
      "sort": "sort",
      "direction": "direction",
      "before": "before",
      "after": "after",
      "first": "first",
      "last": "last",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool