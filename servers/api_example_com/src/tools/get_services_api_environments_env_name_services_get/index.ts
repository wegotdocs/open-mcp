import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_services_api_environments_env_name_services_get",
  "toolDescription": "Get Services",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/services",
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