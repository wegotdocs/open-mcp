import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_outside_collaborators",
  "toolDescription": "List outside collaborators for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/outside_collaborators",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "filter": "filter",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool