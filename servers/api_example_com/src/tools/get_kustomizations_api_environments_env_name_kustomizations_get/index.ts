import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kustomizations_api_environments_env_name_kustomizations_get",
  "toolDescription": "Get Kustomizations",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/kustomizations",
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