import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_list_for_org",
  "toolDescription": "List organization issues assigned to the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/issues",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "filter": "filter",
      "state": "state",
      "labels": "labels",
      "type": "type",
      "sort": "sort",
      "direction": "direction",
      "since": "since",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool