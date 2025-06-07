import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_environment_api_environments_post",
  "toolDescription": "Create Environment",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "parameters": "parameters",
      "commit_to_git": "commit_to_git",
      "env_type": "env_type",
      "template_prefixes": "template_prefixes"
    }
  },
  inputParamsSchema
}

export default tool