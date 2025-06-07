import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configure_git_api_system_git_configure_post",
  "toolDescription": "Configure Git",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/git/configure",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "user_name": "user_name",
      "user_email": "user_email",
      "global_config": "global_config"
    }
  },
  inputParamsSchema
}

export default tool