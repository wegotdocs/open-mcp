import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_summary_api_environments_env_name_summary_get",
  "toolDescription": "Get Environment Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/summary",
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