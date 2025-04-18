import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_list_for_org",
  "toolDescription": "List organization projects",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "state": "state",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool