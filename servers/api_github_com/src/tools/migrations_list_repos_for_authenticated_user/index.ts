import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_list_repos_for_authenticated_user",
  "toolDescription": "List repositories for a user migration",
  "baseUrl": "https://api.github.com",
  "path": "/user/migrations/{migration_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
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