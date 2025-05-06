import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_list_repos_for_org",
  "toolDescription": "List repositories in an organization migration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations/{migration_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "migration_id": "migration_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool