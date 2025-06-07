import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_agent_status_api_environments_env_name_agent_sta",
  "toolDescription": "Get Environment Agent Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/agent-status",
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