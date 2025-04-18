import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_members",
  "toolDescription": "List organization members",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "filter": "filter",
      "role": "role",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool