import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_spark_api_environments_env_name_spark_get",
  "toolDescription": "Get Environment Spark",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/spark",
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