import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "campaigns_list_org_campaigns",
  "toolDescription": "List campaigns for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/campaigns",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "page": "page",
      "per_page": "per_page",
      "direction": "direction",
      "state": "state",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool