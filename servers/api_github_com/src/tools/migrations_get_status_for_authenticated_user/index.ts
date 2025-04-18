import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_get_status_for_authenticated_user",
  "toolDescription": "Get a user migration status",
  "baseUrl": "https://api.github.com",
  "path": "/user/migrations/{migration_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "migration_id": "migration_id"
    },
    "query": {
      "exclude": "exclude"
    }
  },
  inputParamsSchema
}

export default tool