import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespaces_api_environments_env_name_namespaces_get",
  "toolDescription": "Get Namespaces",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/namespaces",
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