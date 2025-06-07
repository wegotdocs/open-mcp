import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_autoscaling_groups_api_environments_env_name_aws",
  "toolDescription": "Get Environment Autoscaling Groups",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/aws/autoscaling-groups",
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