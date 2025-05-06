import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_mark_repo_notifications_as_read",
  "toolDescription": "Mark repository notifications as read",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/notifications",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "last_read_at": "last_read_at"
    }
  },
  inputParamsSchema
}

export default tool