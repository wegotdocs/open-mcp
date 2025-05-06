import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_list_alerts_for_repo",
  "toolDescription": "List Dependabot alerts for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependabot/alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "state": "state",
      "severity": "severity",
      "ecosystem": "ecosystem",
      "package": "package",
      "manifest": "manifest",
      "epss_percentage": "epss_percentage",
      "has": "has",
      "scope": "scope",
      "sort": "sort",
      "direction": "direction",
      "page": "page",
      "per_page": "per_page",
      "before": "before",
      "after": "after",
      "first": "first",
      "last": "last"
    }
  },
  inputParamsSchema
}

export default tool