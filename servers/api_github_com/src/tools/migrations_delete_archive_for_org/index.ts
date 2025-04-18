import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_delete_archive_for_org",
  "toolDescription": "Delete an organization migration archive",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations/{migration_id}/archive",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "migration_id": "migration_id"
    }
  },
  inputParamsSchema
}

export default tool