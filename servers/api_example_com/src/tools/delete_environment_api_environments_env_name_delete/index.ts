import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_environment_api_environments_env_name_delete",
  "toolDescription": "Delete Environment",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "env_name": "env_name"
    },
    "query": {
      "commit_to_git": "commit_to_git"
    }
  },
  inputParamsSchema
}

export default tool