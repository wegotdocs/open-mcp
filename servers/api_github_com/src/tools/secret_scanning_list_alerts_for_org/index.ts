import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "secret_scanning_list_alerts_for_org",
  "toolDescription": "List secret scanning alerts for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/secret-scanning/alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "state": "state",
      "secret_type": "secret_type",
      "resolution": "resolution",
      "sort": "sort",
      "direction": "direction",
      "page": "page",
      "per_page": "per_page",
      "before": "before",
      "after": "after",
      "validity": "validity",
      "is_publicly_leaked": "is_publicly_leaked",
      "is_multi_repo": "is_multi_repo"
    }
  },
  inputParamsSchema
}

export default tool