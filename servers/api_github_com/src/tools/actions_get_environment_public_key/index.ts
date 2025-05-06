import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_environment_public_key",
  "toolDescription": "Get an environment public key",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name"
    }
  },
  inputParamsSchema
}

export default tool