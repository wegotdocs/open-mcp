import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_check_user_can_be_assigned",
  "toolDescription": "Check if a user can be assigned",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/assignees/{assignee}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "assignee": "assignee"
    }
  },
  inputParamsSchema
}

export default tool