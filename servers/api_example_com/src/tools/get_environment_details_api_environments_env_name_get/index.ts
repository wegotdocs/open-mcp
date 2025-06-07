import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_details_api_environments_env_name_get",
  "toolDescription": "Get Environment Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}",
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