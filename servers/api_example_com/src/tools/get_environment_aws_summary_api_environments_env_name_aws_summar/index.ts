import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_aws_summary_api_environments_env_name_aws_summar",
  "toolDescription": "Get Environment Aws Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/aws/summary",
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