import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_git_repositories_api_environments_env_name_git_repositories_",
  "toolDescription": "Get Git Repositories",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/git-repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "env_name": "env_name"
    }
  },
  inputParamsSchema
}

export default tool