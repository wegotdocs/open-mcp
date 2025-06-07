import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_domains_api_environments_env_name_domains_get",
  "toolDescription": "Get Domains",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/domains",
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