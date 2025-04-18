import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_for_org",
  "toolDescription": "List organization repositories",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/repos",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "type": "type",
      "sort": "sort",
      "direction": "direction",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool