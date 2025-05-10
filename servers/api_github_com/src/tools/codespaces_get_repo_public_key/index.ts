import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_repo_public_key",
  "toolDescription": "Get a repository public key",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/secrets/public-key",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool