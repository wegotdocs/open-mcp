import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "push_changes_api_system_git_push_post",
  "toolDescription": "Push Changes",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/git/push",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool