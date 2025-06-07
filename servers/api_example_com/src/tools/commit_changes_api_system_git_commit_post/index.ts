import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "commit_changes_api_system_git_commit_post",
  "toolDescription": "Commit Changes",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/git/commit",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "message": "message",
      "files": "files"
    }
  },
  inputParamsSchema
}

export default tool