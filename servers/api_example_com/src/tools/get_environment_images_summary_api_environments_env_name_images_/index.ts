import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_images_summary_api_environments_env_name_images_",
  "toolDescription": "Get Environment Images Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/images/summary",
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