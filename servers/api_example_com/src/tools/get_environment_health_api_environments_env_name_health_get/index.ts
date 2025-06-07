import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_health_api_environments_env_name_health_get",
  "toolDescription": "Get Environment Health",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/health",
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