import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_repo_secret",
  "toolDescription": "Get a repository secret",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
  "method": "get",
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