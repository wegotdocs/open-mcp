import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "restart_helm_release_api_environments_env_name_helm_releases_rel",
  "toolDescription": "Restart Helm Release",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/helm-releases/{release_name}/restart",
  "method": "post",
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