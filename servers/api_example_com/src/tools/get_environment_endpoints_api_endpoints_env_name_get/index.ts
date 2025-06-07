import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_endpoints_api_endpoints_env_name_get",
  "toolDescription": "Get Environment Endpoints",
  "baseUrl": "https://api.example.com",
  "path": "/api/endpoints/{env_name}",
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