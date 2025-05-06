import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_get_archive_for_authenticated_user",
  "toolDescription": "Download a user migration archive",
  "baseUrl": "https://api.github.com",
  "path": "/user/migrations/{migration_id}/archive",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "migration_id": "migration_id"
    }
  },
  inputParamsSchema
}

export default tool