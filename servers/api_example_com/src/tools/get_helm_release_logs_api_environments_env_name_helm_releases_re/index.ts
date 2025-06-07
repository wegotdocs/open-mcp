import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_helm_release_logs_api_environments_env_name_helm_releases_re",
  "toolDescription": "Get Helm Release Logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/helm-releases/{release_name}/logs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "env_name": "env_name",
      "release_name": "release_name"
    }
  },
  inputParamsSchema
}

export default tool