import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_load_balancers_api_environments_env_name_aws_loa",
  "toolDescription": "Get Environment Load Balancers",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/aws/load-balancers",
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