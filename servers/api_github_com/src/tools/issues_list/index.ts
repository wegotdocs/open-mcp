import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_list",
  "toolDescription": "List issues assigned to the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/issues",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "filter": "filter",
      "state": "state",
      "labels": "labels",
      "sort": "sort",
      "direction": "direction",
      "since": "since",
      "collab": "collab",
      "orgs": "orgs",
      "owned": "owned",
      "pulls": "pulls",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool