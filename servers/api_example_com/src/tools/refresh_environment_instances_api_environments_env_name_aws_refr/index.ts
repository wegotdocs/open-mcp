import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_environment_instances_api_environments_env_name_aws_refr",
  "toolDescription": "Refresh Environment Instances",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/aws/refresh-all",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "env_name": "env_name"
    },
    "body": {
      "min_healthy_percentage": "min_healthy_percentage",
      "instance_warmup": "instance_warmup",
      "preferences": "preferences"
    }
  },
  inputParamsSchema
}

export default tool