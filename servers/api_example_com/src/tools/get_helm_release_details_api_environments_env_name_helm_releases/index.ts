import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_helm_release_details_api_environments_env_name_helm_releases",
  "toolDescription": "Get Helm Release Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/helm-releases/{release_name}",
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