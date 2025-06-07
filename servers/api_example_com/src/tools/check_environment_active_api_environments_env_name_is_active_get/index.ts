import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_environment_active_api_environments_env_name_is_active_get",
  "toolDescription": "Check Environment Active",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/is-active",
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