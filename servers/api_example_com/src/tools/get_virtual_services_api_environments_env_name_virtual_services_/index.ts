import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_virtual_services_api_environments_env_name_virtual_services_",
  "toolDescription": "Get Virtual Services",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/virtual-services",
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