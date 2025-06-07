import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_helm_releases_api_environments_env_name_helm_releases_get",
  "toolDescription": "Get Helm Releases",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/helm-releases",
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