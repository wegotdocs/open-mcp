import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_update_import",
  "toolDescription": "Update an import",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/import",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "vcs_username": "vcs_username",
      "vcs_password": "vcs_password",
      "vcs": "vcs",
      "tfvc_project": "tfvc_project"
    }
  },
  inputParamsSchema
}

export default tool