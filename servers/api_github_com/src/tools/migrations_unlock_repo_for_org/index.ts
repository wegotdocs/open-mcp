import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_unlock_repo_for_org",
  "toolDescription": "Unlock an organization repository",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "migration_id": "migration_id",
      "repo_name": "repo_name"
    }
  },
  inputParamsSchema
}

export default tool