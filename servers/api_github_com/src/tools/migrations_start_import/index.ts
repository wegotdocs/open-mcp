import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_start_import",
  "toolDescription": "Start an import",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/import",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "vcs_url": "vcs_url",
      "vcs": "vcs",
      "vcs_username": "vcs_username",
      "vcs_password": "vcs_password",
      "tfvc_project": "tfvc_project"
    }
  },
  inputParamsSchema
}

export default tool