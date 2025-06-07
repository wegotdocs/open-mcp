import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_environment_api_environments_env_name_post",
  "toolDescription": "Update Environment",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}",
  "method": "post",
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