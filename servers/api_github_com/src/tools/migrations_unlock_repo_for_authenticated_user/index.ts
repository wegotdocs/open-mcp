import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_unlock_repo_for_authenticated_user",
  "toolDescription": "Unlock a user repository",
  "baseUrl": "https://api.github.com",
  "path": "/user/migrations/{migration_id}/repos/{repo_name}/lock",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "migration_id": "migration_id",
      "repo_name": "repo_name"
    }
  },
  inputParamsSchema
}

export default tool