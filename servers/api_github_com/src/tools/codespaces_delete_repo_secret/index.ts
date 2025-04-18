import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_delete_repo_secret",
  "toolDescription": "Delete a repository secret",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool