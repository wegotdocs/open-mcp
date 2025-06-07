import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_operators_api_environments_env_name_operators_ge",
  "toolDescription": "Get Environment Operators",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/operators",
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