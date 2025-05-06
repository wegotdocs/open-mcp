import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_list_for_org",
  "toolDescription": "List organization migrations",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "exclude": "exclude"
    }
  },
  inputParamsSchema
}

export default tool