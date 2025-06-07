import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_services_health_api_environments_env_name_servic",
  "toolDescription": "Get Environment Services Health",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/services/health",
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