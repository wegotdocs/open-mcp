import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_get_status_for_org",
  "toolDescription": "Get an organization migration status",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations/{migration_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "migration_id": "migration_id"
    },
    "query": {
      "exclude": "exclude"
    }
  },
  inputParamsSchema
}

export default tool