import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_check_user_can_be_assigned_to_issue",
  "toolDescription": "Check if a user can be assigned to a issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number",
      "assignee": "assignee"
    }
  },
  inputParamsSchema
}

export default tool