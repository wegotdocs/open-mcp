import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_environment_secrets",
  "toolDescription": "List environment secrets",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/secrets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool